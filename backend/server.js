const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// SquareClient를 가져옵니다.
const { SquareClient } = require("square");

// 환경 변수 로드
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ********************************************
// [수정: 토큰 유효성 검사 추가]
// 1. 액세스 토큰이 존재하는지 확인합니다. 토큰이 없으면 client 초기화가 실패합니다.
const accessToken = process.env.SQUARE_ACCESS_TOKEN;
if (!accessToken) {
  // 토큰이 없으면 치명적인 오류를 출력하고 서버 실행을 중단합니다.
  console.error("FATAL ERROR: SQUARE_ACCESS_TOKEN is missing. Please check your .env file.");
  // 개발 환경에서는 토큰이 없을 경우 안전하게 종료하는 것이 좋습니다.
  // process.exit(1); 
  // 그러나 런타임 환경에 따라 종료가 불가능할 수 있어, 개발 환경에서 디버깅을 돕기 위해 오류 메시지만 남깁니다.
}

// SquareClient 초기화
// .env 파일에 SQUARE_ACCESS_TOKEN과 SQUARE_ENVIRONMENT가 설정되어 있어야 합니다.
const client = new SquareClient({
  accessToken: accessToken,
  // 환경 설정: "sandbox" 또는 "production"
  environment: "sandbox",
});

// Catalog API에 접근하려면 client.catalogApi를 사용합니다.
const catalogApi = client.catalogApi;

// 2. catalogApi 객체가 제대로 로드되었는지 다시 한번 확인합니다.
if (!catalogApi) {
    console.error("FATAL ERROR: Failed to initialize Square Catalog API.");
    console.error("This usually means the access token is invalid or missing.");
    // process.exit(1);
}
// ********************************************

// '/items' 엔드포인트: Square 인벤토리의 모든 카탈로그 항목을 가져옵니다.
app.get("/items", async (req, res) => {
  // catalogApi가 정의되지 않았다면 (토큰 오류), 500 에러를 즉시 반환합니다.
  if (!catalogApi) {
    return res.status(500).json({ 
      message: "Server not configured properly: Square API client failed to initialize (Access Token issue).", 
      details: "Check console logs for FATAL ERROR messages."
    });
  }
    
  console.log("Fetching catalog items...");
  try {
    // listCatalog 메서드는 일반적으로 Request body가 필요 없더라도 빈 객체 {}를 
    // 인수로 전달하는 것이 안전합니다.
    const response = await catalogApi.listCatalog({});
    
    // 응답에서 실제 카탈로그 객체(아이템) 목록을 추출하여 클라이언트에 전송
    const items = response.result.objects || [];
    console.log(`Successfully fetched ${items.length} items.`);
    
    // 'ITEM' 유형의 객체만 필터링하고 싶다면 아래와 같이 필터링할 수 있습니다:
    // const filteredItems = items.filter(obj => obj.type === 'ITEM');
    
    res.json(items);
  } catch (error) {
    console.error("Error fetching catalog items from Square API:", error.message);
    // Square API 오류의 경우, 더 자세한 정보를 클라이언트에게 전달할 수 있습니다.
    const errorDetails = error.errors ? error.errors[0] : { detail: "Unknown error communicating with Square." };
    res.status(500).json({ 
        message: "Failed to fetch catalog items.", 
        details: errorDetails 
    });
  }
});

app.listen(3001, () => console.log("Backend running on port 3001"));

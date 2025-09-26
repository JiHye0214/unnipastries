export default function SignIn() {
    // 외부로그인
    // 사용자가 Square에서 로그인 성공 시 사이트로 리다이렉션(인증 코드 전달)
    // 전닯다은 인증 코드로 Square API 호출
    // 액세스 토큰 및 사용자 정보 획득
    // 액세스 토큰을 세션 또는 JWT로 저장
    // 사용자 로그인 상태 유지

    const handleSignin = () => {
        alert('hello');
        // const clientId = "YOUR_SQUARE_APPLICATION_ID";
        // const redirectUri = encodeURIComponent("https://localhost:4200/home");
        // const squareAuthUrl = `https://connect.squareup.com/oauth2/authorize?client_id=${clientId}&scope=MERCHANT_PROFILE_READ&session=false&redirect_uri=${redirectUri}`;

        // window.location.href = squareAuthUrl;
    };

    return (
        <div>
            <img src="/assets/logo.webp" alt="" title="Unni Pastries" />
            <button onClick={handleSignin} className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign in with Square
            </button>
        </div>
    );
}

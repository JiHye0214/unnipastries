import { useEffect, useState } from "react";

export default function Order() {
    const [ctgShow, setCtgShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCtgShow(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] flex justify-center items-center">
            <ul className="hidden md:flex flex sm:justify-center items-center gap-[20px] lg:gap-[30px] font-bold text-md lg:text-lg">
                {/* 듀오링고 해야 돼서 이만 가지만 */}
                {/* lg일 때만 사이드 nav 띄워서 바로가게 만들고 (like Notion) */}
                {/* li는 div로 바꿔서 표지느낌으로 가로로 해야지 */}
                {/* 아니야 nav 귀찮으니까 */}
                {/* 왜케 변덕이 심하니  */}

                {/* nav 느낌으로 해놨으니까 (사이드는 아닌) 
                내일 눌렀을 때 해당 제품들 뜨게 하면 됨*/}
                <li
                    className={`group relative w-[230px] h-[70px] lg:w-[280px] lg:h-[90px] shrink-0 flex justify-center items-center 
                        shadow-lg rounded-lg btn-hover overflow-hidden
                        transition-all duration-700 ease-out ${
                            ctgShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-[url('/assets/platters/two-platters.webp')] 
      bg-cover bg-center filter brightness-100 group-hover:brightness-60 transition duration-400"
                    ></div>
                    <span className="z-10 hidden text-white group-hover:block transition duration-400">Afternoom Tea & Gift Boxes</span>
                </li>
                <li
                    className={`group relative w-[230px] h-[70px] lg:w-[280px] lg:h-[90px] shrink-0 flex justify-center items-center 
                        shadow-lg rounded-lg btn-hover overflow-hidden
                        transition-all duration-700 ease-out delay-150 ${
                            ctgShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-[url('/assets/cakes/earlgrey-buttercream-cake.webp')] 
      bg-cover bg-center filter brightness-100 group-hover:brightness-60 transition duration-400"
                    ></div>
                    <span className="z-10 hidden text-white group-hover:block transition duration-400">Whole & Piece Cakes</span>
                </li>
                <li
                    className={`group relative w-[230px] h-[70px] lg:w-[280px] lg:h-[90px] shrink-0 flex justify-center items-center 
                        shadow-lg rounded-lg btn-hover overflow-hidden
                        transition-all duration-700 ease-out delay-300 ${
                            ctgShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-[url('/assets/pastreis/assorted-donuts.webp')] 
      bg-cover bg-center filter brightness-100 group-hover:brightness-60 transition duration-400"
                    ></div>
                    <span className="z-10 hidden text-white group-hover:block transition duration-400">Pastries & Baked Goods</span>
                </li>
            </ul>
        </div>
    );
}

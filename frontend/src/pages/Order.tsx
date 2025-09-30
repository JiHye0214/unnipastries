// import { useEffect, useState } from "react";

import { useState } from "react";

export default function Order() {
    const orderNavLabel: string[] = ["All", "Afternoom Tea & Gift Boxes", "Whole & Piece Cakes", "Pastries & Baked Goods"];
    const [clickNavLabel, setClickNavLabel] = useState(0);
    const handleNavLabel = (index:number) => {
        setClickNavLabel(index);
    }
    // const [ctgShow, setCtgShow] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => setCtgShow(true), 100);
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="!mt-[20px] md:!mt-[50px] w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] flex justify-center items-start">
            <nav className="flex gap-[20px]">
                {orderNavLabel.map((label, index) => (
                    // 중괄호 아니고 괄호다 얘야
                    <div onClick={() => handleNavLabel(index)} key={index} className={`${clickNavLabel === index ? 'text-white bg-[var(--basic-yellow)]' : 'text-[var(--basic-yellow)] border-1 border-solid border-[var(--basic-yellow)]'} !px-[15px] !py-[10px] rounded-lg font-semibold btn-hover`}>{label}</div>
                ))}
            </nav>
            {/* <ul className="hidden md:flex flex sm:justify-center items-center gap-[20px] lg:gap-[30px] font-bold text-md lg:text-lg">
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
                    <span className="z-10 opacity-0 text-white group-hover:opacity-100 transition ease-out duration-400">Afternoom Tea & Gift Boxes</span>
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
                    <span className="z-10 opacity-0 text-white group-hover:opacity-100 transition ease-out duration-400">Whole & Piece Cakes</span>
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
                    <span className="z-10 opacity-0 text-white group-hover:opacity-100 transition ease-out duration-400">Pastries & Baked Goods</span>
                </li>
            </ul> */}
        </div>
    );
}

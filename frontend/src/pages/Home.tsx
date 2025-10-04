import { useEffect, useState } from "react";

export default function Home() {
    type Banner = {
        img: URL;
        title: string;
        content: string;
        button: string;
    };

    const promoBanner: Banner[] = [
        {
            img: new URL("../assets/platters/premium-platter.webp", import.meta.url),
            title: "XL PREMIUM SELECT PLATTER",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            button: "Buy Now",
        },
        {
            img: new URL("../assets/platters/afternoon-dinein2.webp", import.meta.url),
            title: "Afternoon Tea Dine In",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            button: "Book Now",
        },
    ];

    const [banIdx, setBanIdx] = useState(0);
    useEffect(() => {
        const moveBanner = setInterval(() => {
            if (banIdx == promoBanner.length - 1) {
                setBanIdx(0);
            } else {
                setBanIdx(banIdx + 1);
            }
        }, 4000);

        //useEffect 안에 []를 안 넣으면
        // 리렌더링 될 때마다 setInterval이 계속 생겨서 무한정 쌓임
        return () => clearInterval(moveBanner);
    }, [banIdx]);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative w-full h-[500px] ">
                {/* 광고형 배너 */}
                {promoBanner.map((banner, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${banner.img})` }}
                        className={`${
                            index === banIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                        } absolute z-${index} w-full h-full flex justify-center items-center bg-no-repeat bg-center bg-cover`}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="relative w-[1100px] flex flex-col gap-[20px] justify-center items-start">
                            <p className="font-bold text-4xl text-white">{banner.title}</p>
                            <p className="w-[500px] text-white">{banner.content}</p>
                            <button className="btn-hover bg-pink-600 text-white font-semibold !py-[10px] !px-[15px]">
                                {banner.button}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

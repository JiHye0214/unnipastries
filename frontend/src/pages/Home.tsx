export default function Home() {
    type Banner = {
        img: string;
        title: string;
        content: string;
        button: string;
    };

    const promoBanner: Banner[] = [
        {
            img: "platters/premium-platter.webp",
            title: "XL PREMIUM SELECT PLATTER",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            button: "Buy Now",
        },
        {
            img: "platters/afternoon-dinein2.webp",
            title: "Afternoon Tea Dine In",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            button: "Book Now",
        },
    ];

    return (
        <div className="w-full min-h-[calc(100vh-380px)] flex justify-center items-center">
            <div className="relative w-full h-[500px] ">
                {/* 광고형 배너 */}
                {promoBanner.map((banner, index) => (
                    <div
                        key={index}
                        className={`z-${index} absolute w-full h-full flex justify-center items-center bg-[url('/assets/${banner.img}')] bg-no-repeat bg-center bg-cover`}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="relative w-[1100px] flex flex-col gap-[20px] justify-center items-start">
                            <p className="font-bold text-4xl text-white">{banner.title}</p>
                            <p className="w-[500px] text-white">
                                {banner.content}
                            </p>
                            <button className="btn-hover bg-pink-600 text-white font-semibold !py-[10px] !px-[15px]">{banner.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default function Contact() {
    return (
        <div className="w-full h-fit !pt-[50px] !pb-[100px] sm:!py-[100px] flex flex-col sm:flex-row justify-center items-center gap-[30px] sm:gap-[50px] md:gap-[10%]">
            <img src="/assets/cakes/doubleberry-cheese-cake.webp" className="w-[80%] sm:w-[40%] lg:w-[30%]" alt="" />
            <div className="w-[80%] sm:w-[40%] lg:w-[30%] flex flex-col gap-[20px] text-center sm:text-left">
                <p className="h-[40px] md:h-[60px] font-bold text-2xl md:text-3xl whitespace-nowrap">Our Location & Hours</p>
                <p className="whitespace-nowrap">1773 Robson Street <br /> Vancouver, BC V6G 1C9</p>
                <p className="whitespace-nowrap">604-828-7476 <br />unnipastries@gmail.com</p>
                <p className="whitespace-nowrap">Everyday 08:00am - 09:00pm</p>
            </div>
        </div>
    )
}
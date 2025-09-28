const Footer = () => {
    return (
        <footer className="h-[300px] md:h-[400px] mx-auto flex justify-center items-center text-sm bg-[var(--basic-yellow)]">
            <div className="w-full max-w-[1000px] h-fit md:!px-[40px] flex md:flex-row justify-center md:justify-between items-center md:items-start ">
                <div className="w-fit flex flex-col items-center md:items-start gap-[30px]">
                    <img src="/assets/logo/unni.webp" className="w-[50px] md:w-[80px]" alt="" />
                    <div className="flex flex-col gap-[5px] text-center md:text-left">
                        <p className="whitespace-nowrap font-bold text-lg">Ⓒ 2025 Unni Pastries</p>
                        <p className="whitespace-nowrap">
                            Site design & development by{" "}
                            <a className="text-white" href="www.linkedin.com/in/jihye-p-2b3755344" target="_blank">
                                Jihye Park
                            </a>
                        </p>
                    </div>
                    <div className="w-full flex justify-center gap-[10px] md:justify-start">
                        <a href="mailto:unnipastries@gmail.com" target="_blank">
                            <img src="/assets/logo/mail.png" className="w-[35px]" alt="" />
                        </a>
                        <a href="https://www.instagram.com/unnipastries/#" target="_blank">
                            <img src="/assets/logo/instagram.png" className="w-[35px]" alt="" />
                        </a>
                        <a className="md:hidden" href="https://maps.app.goo.gl/zCRY2svp4cnbeH6J9" target="_blank">
                            <img src="/assets/logo/location.png" className="w-[35px]" alt="" />
                        </a>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.212764114846!2d-123.13747038751085!3d49.29131257127481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c968fc8751%3A0x2a9b4d335bc7375e!2sUNNI%20PASTRIES!5e0!3m2!1sko!2sca!4v1759022697732!5m2!1sko!2sca"
                    width="400"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="hidden md:block"
                />
            </div>
        </footer>
    );
};

export default Footer;

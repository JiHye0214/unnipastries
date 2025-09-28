import { useState } from "react";
import NavLink from "./NavLink";

export default function Header({ isVisible }: { isVisible: boolean }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`${
                isVisible ? "visible" : "hidden"
            } w-full h-[100px] md:h-[300px] flex flex-col gap-[50px] justify-center items-center relative`}
        >
            <button className="btn-hover md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                <img src="/assets/logo/menu.png" alt="" className="w-[24px] absolute top-[38px] left-[20px]" />
            </button>
            <img src="/assets/logo/unni.webp" alt="" title="Unni Pastries" className="w-[60px] md:w-[100px]" />
            <nav
                className={`w-[250px] md:w-fit h-[100vh] md:h-fit !px-5 !py-15 md:!p-0 flex flex-col md:flex-row gap-[20px] md:gap-[50px] transition-transform duration-300 ease-in-out absolute top-0 left-0 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] md:relative md:shadow-none md:flex ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full" 
                } md:translate-x-0 md:!transition-none`}
            >
                <button className="btn-hover md:hidden" onClick={() => setMenuOpen(!setMenuOpen)}>
                    <img src="/assets/logo/close.png" className="w-[20px] absolute top-5 right-5" alt="" />
                </button>
                <NavLink to="/" label="Home"></NavLink>
                <NavLink to="/order" label="Order"></NavLink>
                <NavLink to="/wedding-custom" label="Wedding & Custom"></NavLink>
                <NavLink to="/faq" label="FAQ"></NavLink>
                <NavLink to="/contact" label="Contact"></NavLink>
            </nav>
        </header>
    );
}

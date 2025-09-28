import { useState } from "react";
import NavLink from "./NavLink";

export default function Header({ isVisible }: { isVisible: boolean }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`${
                isVisible ? "visible" : "hidden"
            } w-full h-[80px] md:h-[250px] flex flex-col gap-[50px] justify-end items-center relative`}
        >
            <button className="btn-hover md:hidden absolute top-[38px] left-[20px]" onClick={() => setMenuOpen(!isMenuOpen)}>
                <img src="/assets/logo/menu.png" alt="" className="w-[24px]" />
            </button>
            <img src="/assets/logo/unni.webp" alt="" title="Unni Pastries" className="w-[60px] md:w-[100px]" />
            <nav
                className={`w-[250px] md:w-fit h-[100vh] md:h-fit !px-5 !py-15 md:!p-0 flex flex-col md:flex-row gap-[20px] md:gap-[50px] transition-transform duration-300 ease-in-out absolute top-0 left-0 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] md:relative md:shadow-none md:flex ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full" 
                } md:translate-x-0 md:!transition-none`}
            >
                <button className="btn-hover md:hidden absolute top-5 right-5" onClick={() => setMenuOpen(!setMenuOpen)}>
                    <img src="/assets/logo/close.png" className="w-[18px]" alt="" />
                </button>
                <NavLink menuClose={() => setMenuOpen(false)} to="/" label="Home"></NavLink>
                <NavLink menuClose={() => setMenuOpen(false)} to="/order" label="Order Online"></NavLink>
                <NavLink menuClose={() => setMenuOpen(false)} to="/wedding-custom" label="Wedding & Custom"></NavLink>
                <NavLink menuClose={() => setMenuOpen(false)} to="/faq" label="FAQ"></NavLink>
                <NavLink menuClose={() => setMenuOpen(false)} to="/contact" label="Contact Us"></NavLink>
            </nav>
        </header>
    );
}

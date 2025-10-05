import { useState } from "react";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const nowOrder = location.pathname === "/order";

    const clientId = import.meta.env.VITE_SQUARE_CLIENT_ID;
    const redirectUri = encodeURIComponent("http://localhost:5173/square-signin-success");
    const squareUrl = `https://connect.squareupsandbox.com/oauth2/authorize?client_id=${clientId}&response_type=code&scope=ITEMS_READ+CUSTOMERS_READ&redirect_uri=${redirectUri}`;

    return (
        <header className={` ${nowOrder ? "bg-[var(--light-yellow)]" : ""} w-full flex justify-center items-center`}>
            <div className="w-[1100px] h-[80px] !px-[20px] xl:!p-0 lg:h-[60px] flex justify-between items-center relative">
                <button className="btn-hover lg:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
                    <img src="/assets/logo/menu.png" alt="" className="w-[24px]" />
                </button>
                <img
                    src="/assets/logo/unni-noback.png"
                    alt=""
                    title="Unni Pastries"
                    className="h-[28px] absolute top-[calc(50%-14px)] left-[calc(50%-25.87px)] lg:static"
                />
                <nav
                    className={`w-[250px] lg:w-fit h-[100vh] lg:h-fit !px-5 !py-15 lg:!p-0 flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[40px] transition-transform duration-300 ease-in-out absolute z-10 top-0 left-0 shadow-[0_0_15px_rgba(0,0,0,0.3)] lg:relative lg:shadow-none lg:flex ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 lg:!transition-none`}
                >
                    <button className="btn-hover lg:hidden absolute top-6 right-6" onClick={() => setMenuOpen(!setMenuOpen)}>
                        <img src="/assets/logo/close.png" className="w-[15px]" alt="" />
                    </button>
                    <NavLink menuClose={() => setMenuOpen(false)} to="/" label="Home"></NavLink>
                    <NavLink menuClose={() => setMenuOpen(false)} to="/about" label="About"></NavLink>
                    {/* <NavLink menuClose={() => setMenuOpen(false)} to="/wedding-custom" label="Wedding & Custom"></NavLink> */}
                    <NavLink menuClose={() => setMenuOpen(false)} to="/contact" label="Contact Us"></NavLink>
                    <div className="flex gap-[15px]">
                        <NavLink menuClose={() => setMenuOpen(false)} to="/order" label="Order Online"></NavLink>
                        <a
                            className="flex items-center gap-[10px] text-sm font-normal bg-black text-white !px-[17px] !py-[7px] rounded-full"
                            href={`https://connect.squareupsandbox.com/oauth2/authorize?client_id=${clientId}&response_type=code&scope=ITEMS_READ+CUSTOMERS_READ&redirect_uri=${redirectUri}`}
                        >
                            Signin with <img src="/assets/logo/square.png" width={"20px"} alt="" />
                        </a>
                        {/* <NavLink menuClose={() => setMenuOpen(false)} to="/cart" label="Cart"></NavLink> */}
                    </div>
                </nav>
            </div>
        </header>
    );
}

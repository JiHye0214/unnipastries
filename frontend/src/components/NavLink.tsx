import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLink = ({ to, label, menuClose }: { to: string; label: string, menuClose: () => void }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            onClick={menuClose}
            to={to}
            className={`py-10 text-sm font-medium ${isActive ? "text-[var(--basic-yellow)]" : ""}`}
        >
            {label}
        </Link>
    );
};

export default NavLink;

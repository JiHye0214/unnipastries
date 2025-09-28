import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`py-10 text-xl font-bold ${isActive ? "text-[var(--basic-yellow)]" : ""}`}
        >
            {label}
        </Link>
    );
};

export default NavLink;

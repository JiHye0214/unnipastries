import NavLink from "./NavLink";

export default function Header({isVisible}: {isVisible: boolean}) {
    return (
        <header className={`${isVisible} ? 'visible' : 'hidden'`}>
            <img src="/assets/logo.webp" alt="" title="Unni Pastries" />
            <nav>
                {/* login, mypage, cart */}
            </nav>
            <nav>
                <NavLink to="/" label="Home"></NavLink>
                <NavLink to="/order" label="Home"></NavLink>
                <NavLink to="/wedding-custom" label="Home"></NavLink>
                <NavLink to="/faq" label="Home"></NavLink>
                <NavLink to="/contact" label="Home"></NavLink>
            </nav>
        </header>
    )
}
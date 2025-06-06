import AppLogo from "../Atoms/AppLogo";
import CallUs from "../Atoms/CallUs";
import FlagsSelector from "../Atoms/FlagsSelector";
import NavLinks from "./Components/NavLinks";
import NavMenuToggler from "./Components/NavMenuToggler";

function Nav() {
    return (
        <nav className="bg-section relative max-xl:border-b max-xl:border-b-gray-200 max-xl:py-3">
            <div className="container flex items-center justify-between">
                {/* Nav Links */}
                <NavLinks />
                {/* App Logo */}
                <AppLogo className="xl:hidden" />
                {/* Nav Utilities */}
                <div className="nav-utilities flex items-center gap-3 py-1">
                    {/* Call Us */}
                    <CallUs className="max-sm:hidden" />
                    {/* Flags Selector */}
                    <FlagsSelector className="max-md:hidden" />
                    {/* Nav Menu Toggler */}
                    <NavMenuToggler />
                </div>
            </div>
        </nav>
    )
}

export default Nav;
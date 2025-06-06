import AppLogo from "../Atoms/AppLogo";
import AuthLinks from "../Atoms/AuthLinks";
import { useAppContext } from "../../Contexts/AppContext";
import SearchForm from "./Components/SearchForm";
import SetupProgress from "./Components/SetupProgress";
import UserUtilities from "./Components/UserUtilities";

function Header() {

    const { user, userRole } = useAppContext();

    return (
        <header className="py-5 shadow-sm">
            <div className="container flex items-center gap-5 max-md:flex-col-reverse">
                {/* App Logo */}
                <AppLogo className="max-xl:hidden" />
                {/* Search Form */}
                {
                    userRole === 'candidate' &&
                    <SearchForm />
                }
                {/* Auth Links */}
                {
                    !user &&
                    <AuthLinks className="max-md:hidden ms-auto" />
                }
                {/* Setup Progress */}
                {/* <SetupProgress className="ms-auto" /> */}
                {/* User Utilities */}
                {
                    user &&
                    <UserUtilities className={`${userRole === 'employer' ? 'max-xl:flex-1' : ''} ms-auto`} />
                }
            </div>
        </header>
    )
}

export default Header;
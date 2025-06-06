import { Link } from "react-router-dom";
import { useNav } from "../../Contexts/NavContext";

function AuthLinks({ className = '' }) {

    const { setMenuIsOpen } = useNav();

    const handleClick = () => setMenuIsOpen(false);

    return (
        <div className={`auth-links flex items-center gap-3 ${className}`}>
            <Link
                onClick={handleClick}
                to={`/signin`}
                className="block py-2 px-4 rounded-md border border-primary/20 font-semibold text-primary transition sm:hover:bg-primary sm:hover:text-white"
            >
                Sign In
            </Link>
            <Link
                to={`/signup`}
                onClick={handleClick}
                className="block py-2 px-4 rounded-md border border-primary bg-primary font-semibold text-white transition sm:hover:bg-transparent sm:hover:text-primary"
            >
                Post a Job
            </Link>
        </div>
    )
}

export default AuthLinks;
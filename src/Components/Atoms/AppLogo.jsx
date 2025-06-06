import { Link } from "react-router-dom";

function AppLogo({ className = '', iconClassName = '' }) {
    return (
        <Link
            to={'/'}
            className={`flex items-center gap-2 font-semibold text-2xl ${className}`}
        >
            <i className={`fa-solid fa-briefcase fa-fw text-primary ${iconClassName}`}></i>
            <span>Jobpilot</span>
        </Link>
    )
}

export default AppLogo;
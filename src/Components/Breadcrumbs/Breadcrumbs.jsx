import { Link } from "react-router-dom";

function Breadcrumbs({ pageName = '', breadcrumbs = [] }) {
    return (
        <div className="breadcrumbs bg-section py-5 max-md:hidden sticky top-0 z-50">
            <div className="container flex items-center justify-between">
                {/* Page Name */}
                <h2 className="font-semibold text-lg">{pageName}</h2>
                {/* Breadcrumbs List */}
                <ul className="flex items-center gap-2">
                    {
                        breadcrumbs.map(({ to, label }, index) => (<li key={index} className="group">
                            <Link
                                to={to}
                                className="font-medium transition sm:hover:text-app-text text-gray-400 group-last-of-type:text-app-text"
                            >{label}</Link>
                            {
                                index !== (breadcrumbs.length - 1) &&
                                <span className="text-gray-400"> /</span>
                            }
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumbs;
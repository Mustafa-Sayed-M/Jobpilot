import { Link } from "react-router-dom";

function EmployerCard({ employerData: { name, isFeatured, location, company_logo, positions_count } }) {
    return (
        <div className="employer-card border border-gray-200 rounded-md shadow-sm bg-white p-5">
            {/* Header */}
            <div className="header mb-5 flex items-center gap-3">
                {/* Company Logo */}
                <img
                    src={company_logo}
                    alt="Company Logo"
                    className="rounded-md"
                    width={60}
                />
                {/* Company Info */}
                <div className="company-info">
                    {/* Company Name */}
                    <h3 className="font-semibold text-xl mb-2 flex items-center gap-2">
                        <span>{name}</span>
                        {
                            isFeatured &&
                            <div className="py-2 px-4 rounded-full text-sm bg-red-50 text-red-500">
                                Featured
                            </div>
                        }
                    </h3>
                    {/* Company Location */}
                    <div className="flex items-center gap-1 font-medium opacity-75">
                        <i className="fa-solid fa-location-dot fa-fw text-xl"></i>
                        <p className="text-gray-600">{location}</p>
                    </div>
                </div>
            </div>
            {/* Positions Count */}
            <Link to={'/'} className="block py-3 text-center bg-primary/10 text-primary font-medium rounded-md transition sm:hover:bg-primary sm:hover:text-white">
                Open Position {positions_count}
            </Link>
        </div>
    )
}

export default EmployerCard;
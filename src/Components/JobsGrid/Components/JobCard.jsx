import { Link } from "react-router-dom";
import BookmarkIcon from "../../Atoms/BookmarkIcon/BookmarkIcon";

function JobCard({ jobData: { id, title, salary, time_work, company } }) {
    return (
        <div className="job-card border border-gray-200 rounded-md shadow-sm p-3">
            {/* Job Title */}
            <Link
                to={`/find-job/${id}`}
                className="sm:hover:underline font-semibold mb-2 text-lg"
            >{title} </Link>
            {/* Job Info */}
            <div className="job-info flex items-center gap-2 mb-7">
                {/* Time Work */}
                <div className="time-work uppercase font-semibold text-green-500 bg-green-100 rounded-md p-2 text-sm">{time_work}</div>
                {/* Job Salary */}
                <p className="text-gray-400 font-medium">Salary: ${salary.from} - ${salary.to}</p>
            </div>
            {/* Company */}
            <div className="company flex items-center justify-between gap-2">
                {/* Company Info */}
                <div className="company-info flex-1 flex items-center gap-3">
                    {/* Company Logo */}
                    <img
                        src={company.company_logo}
                        alt="Company Logo"
                        className="rounded-md"
                        width={60}
                    />
                    <div className="">
                        {/* Company Name */}
                        <h3 className="font-semibold text-xl mb-2">{company.name}</h3>
                        {/* Company Location */}
                        <div className="flex items-center gap-1 font-medium opacity-75">
                            <i className="fa-solid fa-location-dot fa-fw text-xl"></i>
                            <p className="text-gray-600">{company.location}</p>
                        </div>
                    </div>
                </div>
                {/* Save Job */}
                <BookmarkIcon />
            </div>
        </div>
    )
}

export default JobCard;
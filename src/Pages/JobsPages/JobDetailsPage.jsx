import { Outlet } from "react-router-dom";

function JobDetailsPage() {
    return (
        <div className="job-details-page">
            Job Details Page
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default JobDetailsPage;
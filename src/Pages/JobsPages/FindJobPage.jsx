import { Outlet } from "react-router-dom";
import JobResultsSection from "../../Components/Sections/JobResultsSection/JobResultsSection";
import JobSearch from "../../Components/JobSearch/JobSearch";
import Pagination from "../../Components/Pagination/Pagination";
import featuredJobs from '../../Data/featuredJobs.json';
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import PopularSearches from "../../Components/PopularSearches/PopularSearches";

function FindJobPage() {
    return (
        <div className="find-job-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Find Job"
                breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/find-job', label: 'Find Job' }]}
            />
            {/* Job Search */}
            <JobSearch />
            {/* Popular Searches */}
            <PopularSearches />
            {/* Job Results */}
            <JobResultsSection jobsList={featuredJobs} />
            {/* Pagination */}
            <div className="container">
                <Pagination />
            </div>
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default FindJobPage;
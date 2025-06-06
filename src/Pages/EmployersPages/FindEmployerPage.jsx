import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import JobSearch from "../../Components/JobSearch/JobSearch";
import Pagination from "../../Components/Pagination/Pagination";
import PopularSearches from "../../Components/PopularSearches/PopularSearches";
import EmployersResultsSection from "../../Components/Sections/EmployersResultsSection/EmployersResultsSection";

function FindEmployerPage() {
    return (
        <div className="find-employer-page">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Find Employer"
                breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/find-job', label: 'Find Employer' }]}
            />
            {/* JobSearch */}
            <JobSearch isFilter={false} />
            {/* Popular Searches */}
            <PopularSearches />
            {/* Employers */}
            <EmployersResultsSection employersList={[]} />
            {/* Pagination */}
            <div className="container">
                <Pagination />
            </div>
        </div>
    )
}

export default FindEmployerPage;
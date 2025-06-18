import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import JobSearch from "../../Components/JobSearch/JobSearch";
import PopularSearches from "../../Components/PopularSearches/PopularSearches";
import CandidatesResultsSection from "../../Components/Sections/CandidatesResultsSection/CandidatesResultsSection";

function FindCandidatePage() {
    return (
        <div className="find-candidate-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Find Candidate"
                breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/find-job', label: 'Find Candidate' }]}
            />
            {/* Job Search */}
            <JobSearch isFilter={false} className="bg-section" />
            {/* Popular Searches */}
            <PopularSearches />
            {/* Main */}
            <main className="py-10">
                <div className="container grid grid-cols-1 xl:grid-cols-3 gap-10">
                    {/* Candidates Filters */}
                    <div className="candidates-filters">
                        Candidates Filters
                    </div>
                    {/* Candidates Results Section */}
                    <CandidatesResultsSection candidatesList={[]} />
                </div>
            </main>
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default FindCandidatePage;
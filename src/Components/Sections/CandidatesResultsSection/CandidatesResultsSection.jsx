import CandidatesList from "../../CandidatesList/CandidatesList";
import Pagination from "../../Pagination/Pagination";

function CandidatesResultsSection({ candidatesList = [] }) {
    return (
        <section className="candidates-results-section">
            {/* Candidates List */}
            <CandidatesList candidatesList={candidatesList} className="xl:col-span-2" />
            {/* Pagination */}
            <Pagination />
        </section>
    )
}

export default CandidatesResultsSection;
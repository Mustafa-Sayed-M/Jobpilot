import JobsGrid from "../../JobsGrid/JobsGrid";

function JobResultsSection({ jobsList = [] }) {
    return (
        <section className="job-results-section py-5">
            <div className="container">
                <JobsGrid jobsList={jobsList.slice(0, 20)} />
            </div>
        </section>
    )
}

export default JobResultsSection;
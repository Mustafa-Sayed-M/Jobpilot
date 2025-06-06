import JobCard from "./Components/JobCard";

function JobsGrid({ jobsList = [] }) {
    return (
        <div className="jobs-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {
                jobsList.map((job, index) => (<JobCard jobData={job} key={index} />))
            }
        </div>
    )
}

export default JobsGrid;
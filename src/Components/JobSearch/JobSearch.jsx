import FormSearch from "./Components/FormSearch";

function JobSearch({ className = '', isFilter = true }) {
    return (
        <div className={`job-search py-5 ${className}`}>
            <div className="container">
                {/* Form Search */}
                <FormSearch isFilters={isFilter} />
            </div>
        </div>
    )
}

export default JobSearch;
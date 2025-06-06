const jobTypes = [
    { value: '', label: 'Full Time' },
    { value: 'partTime', label: 'Part-Time' },
    { value: 'internship', label: 'Internship' },
    { value: 'temporary', label: 'Temporary' },
    { value: 'contractBase', label: 'Contract Base' },
];

function JobTypeFilter({ filters, handleFilterChange }) {
    return (
        <div className="job-type-filter p-4 border-b border-b-gray-300">
            {/* Filter Label */}
            <h4 className="font-semibold text-primary mb-3">Job Type</h4>
            {/* Salaries */}
            <ul className="space-y-2">
                {
                    jobTypes.map(({ label, value }, index) => (<li key={index}>
                        <label className="flex items-center gap-2 w-fit">
                            <input
                                name="jobType"
                                type="radio"
                                defaultChecked={filters.jobType === value}
                                onChange={() => handleFilterChange('jobType', value)}
                                className="peer hidden"
                            />
                            {/* Custom Radio Button */}
                            <div className="custom-radio-button w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition peer-checked:border-primary peer-checked:**:scale-100 cursor-pointer hover sm:hover:border-primary">
                                <div className="circle-icon transition scale-0 text-primary text-xs">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </div>
                            </div>
                            <span className="cursor-pointer font-medium">{label}</span>
                        </label>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default JobTypeFilter;
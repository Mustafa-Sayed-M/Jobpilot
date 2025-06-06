const salaryData = [
    { value: '', label: '$10 - $100' },
    { value: '100-1000', label: '$100 - $1,000' },
    { value: '1000-10000', label: '$1,000 - $10,000' },
    { value: '10000-100000', label: '$10,000 - $100,000' },
    { value: '100000-up', label: '$100,000 - Up' },
    { value: 'custom', label: 'Custom' },
];

function SalaryFilter({ filters, handleFilterChange }) {
    return (
        <div className="salary-filter p-4 border-b border-b-gray-300">
            {/* Filter Label */}
            <h4 className="font-semibold text-primary mb-3">Salary (yearly)</h4>
            {/* Salary Ranges */}
            <div className="salary-ranges mb-4">
                Salary Ranges
            </div>
            {/* Salaries */}
            <ul className="space-y-2">
                {
                    salaryData.map(({ value, label }, index) => (<li key={index}>
                        <label className="flex items-center gap-2 w-fit">
                            <input
                                name="salary"
                                type="radio"
                                defaultChecked={filters.salaryRange === value}
                                onChange={() => handleFilterChange('salaryRange', value)}
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

export default SalaryFilter;
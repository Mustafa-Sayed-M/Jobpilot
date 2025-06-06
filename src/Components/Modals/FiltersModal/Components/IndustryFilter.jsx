const industries = [
    { value: '', label: 'All Categories' },
    { value: 'developments', label: 'Developments' },
    { value: 'business', label: 'Business' },
    { value: 'financeAndAccounting', label: 'Finance & Accounting' },
    { value: 'ItAndSoftware', label: 'IT & Software' },
    { value: 'officeProductivity', label: 'Office Productivity' },
    { value: 'personalDevelopment', label: 'Personal Development' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'photographyAndVideo', label: 'Photography & Video' },
];

function IndustryFilter({ filters, handleFilterChange }) {
    return (
        <div className="industry-filter p-4 border-b border-b-gray-300">
            {/* Filter Label */}
            <h4 className="font-semibold text-primary mb-3">Industry</h4>
            {/* Industry Select */}
            <ul className="space-y-2">
                {
                    industries.map(({ value, label }, index) => (<li key={index}>
                        <button
                            type="button"
                            onClick={() => handleFilterChange('industry', value)}
                            className={`block w-full text-start p-2 rounded-md font-medium transition ${filters.industry === value ? 'bg-primary/10 text-primary shadow-sm' : 'sm:hover:text-primary'}`}
                        >{label}</button>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default IndustryFilter;
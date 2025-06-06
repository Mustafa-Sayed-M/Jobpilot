function ApplyFilters({ filters, handleFilterChange, applyFilters }) {
    return (
        <div className="apply-filters flex sm:items-center justify-between gap-y-3 mt-auto p-5 max-sm:flex-col sticky bottom-0 z-10 bg-white">
            {/* Remote Job */}
            <label className="flex items-center gap-2">
                <input
                    name="remote_job"
                    type="checkbox"
                    className="peer hidden"
                    defaultChecked={filters.isRemote}
                    onChange={e => handleFilterChange('isRemote', e.target.checked)}
                />
                {/* Custom Toggler */}
                <div className="custom-toggler bg-gray-300 w-12 h-6 rounded-full p-1 peer-checked:bg-primary peer-checked:*:translate-x-5 transition cursor-pointer">
                    <div className="circle-icon text-white relative top-1/2 -translate-y-1/2 transition">
                        <i className="fa-solid fa-circle fa-fw"></i>
                    </div>
                </div>
                <span className="font-medium">Remote Job</span>
            </label>
            {/* Apply Button */}
            <button
                type="button"
                onClick={applyFilters}
                className="py-2 px-4 rounded-sm bg-primary text-white font-medium"
            >
                Apply Filter
            </button>
        </div>
    )
}

export default ApplyFilters;
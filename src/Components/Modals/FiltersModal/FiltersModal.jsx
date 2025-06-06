import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import IndustryFilter from "./Components/IndustryFilter";
import JobTypeFilter from "./Components/JobTypeFilter";
import SalaryFilter from "./Components/SalaryFilter";
import SideHeader from "./Components/SideHeader";
import ApplyFilters from "./Components/ApplyFilters";

function FiltersModal() {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchParams] = useSearchParams();

    const [filters, setFilters] = React.useState({
        industry: searchParams.get('industry') || '',
        jobType: searchParams.get('jobType') || '',
        salaryRange: searchParams.get('salaryRange') || '',
        isRemote: searchParams.get('isRemote') || false
    });

    // Handle Transition
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Close Filter Handler
    const handleClose = React.useCallback(() => {
        const search = searchParams.toString();
        navigate(`/find-job${search ? `?${search}` : ''}`);
    }, [navigate, searchParams]);

    // Apply Filters Handler
    const applyFilters = () => {
        const newParams = new URLSearchParams(searchParams);
        for (const key in filters) {
            if (filters[key]) {
                newParams.set(key, filters[key]);
            } else {
                newParams.delete(key);
            }
        }
        // Navigate to filters
        navigate(`/find-job?${newParams.toString()}`);
    };
    // Filter Change Handler
    const handleFilterChange = (filterKey, filterValue) => {
        setFilters(prev => ({ ...prev, [filterKey]: filterValue }))
    };

    return (
        <div
            onClick={handleClose}
            className={`filters-modal fixed w-full h-screen bg-black/75 top-0 left-0 z-[999] flex transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
            <aside
                onClick={e => e.stopPropagation()}
                className={`max-h-full overflow-y-auto bg-white max-sm:min-w-[280px] sm:min-w-[340px] flex flex-col transition ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >

                {/* Side Header */}
                <SideHeader
                    handleClose={handleClose}
                />

                {/* Industry Filter */}
                <IndustryFilter
                    filters={filters}
                    handleFilterChange={handleFilterChange}
                />

                {/* Job Type Filter */}
                <JobTypeFilter
                    filters={filters}
                    handleFilterChange={handleFilterChange}
                />

                {/* Salary Filter */}
                <SalaryFilter
                    filters={filters}
                    handleFilterChange={handleFilterChange}
                />

                {/* Apply Filters */}
                <ApplyFilters
                    filters={filters}
                    applyFilters={applyFilters}
                    handleFilterChange={handleFilterChange}
                />

            </aside>
        </div>
    )
}

export default FiltersModal;
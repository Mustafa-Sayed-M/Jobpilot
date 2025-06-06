import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FormSearch({ isFilters = true }) {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = React.useState(searchParams.get('q') || '');
    const [locationValue, setLocationValue] = React.useState(searchParams.get('location') || '');

    // Navigate Filter Handler
    const handleNavigateFilter = () => {
        const search = searchParams.toString();
        navigate(`/find-job/filters${search ? `?${search}` : ''}`);
    };

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue || locationValue) {
            const newParams = new URLSearchParams(searchParams);
            if (searchValue) {
                newParams.set('q', searchValue);
            }
            if (locationValue) {
                newParams.set('location', locationValue);
            }
            setSearchParams(newParams);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='flex lg:items-center rounded-md overflow-hidden border border-gray-200 max-lg:flex-col'
        >
            {/* Form Left */}
            <div className="form-left flex-1">
                {/* Search Input Text */}
                <div className="search-input-text relative lg:border-r max-lg:border-b border-gray-200">
                    <label htmlFor="searchInput" className="text-primary text-lg absolute top-1/2 -translate-y-1/2 left-2.5">
                        <i className="fa-solid fa-search fa-fw"></i>
                    </label>
                    <input
                        required
                        id="searchInput"
                        name="search_input"
                        defaultValue={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        placeholder="Search by: title, Position, Keyword..."
                        className="p-4 ps-10 w-full bg-white"
                    />
                </div>
            </div>
            {/* Form Right */}
            <div className="form-right flex-1 flex sm:items-center max-sm:flex-col">
                {/* Search Input Location */}
                <div className="search-input-location flex-1 relative">
                    <label htmlFor="searchLocation" className="text-primary text-lg absolute top-1/2 -translate-y-1/2 left-2.5">
                        <i className="fa-solid fa-location-dot fa-fw"></i>
                    </label>
                    <input
                        id="searchLocation"
                        name="search_location"
                        className="p-4 ps-10 w-full bg-white"
                        defaultValue={locationValue}
                        placeholder="City, state or zip code"
                        onChange={e => setLocationValue(e.target.value)}
                    />
                </div>
                {/* Submit Utilities */}
                <div className="submit-utilities flex items-center gap-3 p-2 max-sm:*:flex-1">
                    {/* Filters */}
                    {
                        isFilters &&
                        <button
                            type='button'
                            onClick={handleNavigateFilter}
                            className="py-2 px-4 rounded-md bg-gray-200 font-medium"
                        >
                            <i className="fa-solid fa-sliders fa-fw"></i>
                            <span className="ms-2">Filters</span>
                        </button>
                    }
                    {/* Submit */}
                    <button
                        className="py-2 px-4 rounded-md bg-primary text-white font-medium"
                    >
                        <span className="ms-2">Find Job</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormSearch;
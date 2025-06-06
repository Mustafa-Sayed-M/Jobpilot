import FlagsSelector from "../../Atoms/FlagsSelector";

function SearchForm() {
    return (
        <form className="search-form flex items-center gap-3 border border-gray-300 rounded-md w-full xl:max-w-[800px]" onSubmit={e => e.preventDefault()}>
            {/* Flags Selector */}
            <FlagsSelector className="w-[200px]" defaultValue="IN" />
            {/* Search Input */}
            <div className="input-search-group relative before:h-1/2 before:w-0.5 before:bg-gray-300 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                <label htmlFor="search" className="text-primary text-xl absolute top-1/2 -translate-y-1/2 left-3">
                    <i className="fa-solid fa-search fa-fw"></i>
                </label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Job title, keyword, company"
                    className="w-full ps-12 p-3"
                />
            </div>
        </form>
    )
}

export default SearchForm;
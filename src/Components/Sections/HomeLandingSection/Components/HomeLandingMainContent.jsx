import { Link } from "react-router-dom";

function HomeLandingMainContent() {
    return (
        <div className="main-content xl:w-1/2">
            <h1 className="font-semibold mb-3 text-4xl">Find a job that suits your interest & skills.</h1>
            <p className="text-gray-400 mb-7">Aliquam vitae turpis in diam convllis finibux in at risus. Nullam
                in scelersque leo, eget sollicitudin velit bestiblum</p>
            <form
                className="bg-white border border-gray-400 rounded-md flex max-sm:flex-col sm:items-center gap-2 pr-10 relative max-sm:p-3"
                onSubmit={e => e.preventDefault()}
            >
                {/* Job Search */}
                <div className="input-group flex-1 relative">
                    <label htmlFor="search" className="absolute top-1/2 -translate-y-1/2 left-2">
                        <i className="fa-solid fa-search fa-fw text-xl text-primary"></i>
                    </label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Job title, keyword, company"
                        className="bg-transparent p-3 w-full ps-10 max-sm:border max-sm:rounded-md max-sm:border-gray-400"
                    />
                </div>
                {/* Location Search */}
                <div className="input-group flex-1 relative">
                    <label htmlFor="location" className="absolute top-1/2 -translate-y-1/2 left-2">
                        <i className="fa-solid fa-location-dot fa-fw text-xl text-primary"></i>
                    </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Your Location"
                        className="bg-transparent p-3 w-full ps-10 max-sm:border max-sm:rounded-md max-sm:border-gray-400"
                    />
                </div>
                {/* Submit */}
                <Link
                    to={'/find-job'}
                    className="bg-primary text-white font-medium py-2 px-4 rounded-sm sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2"
                >
                    Find Job
                </Link>
            </form>
        </div>
    )
}

export default HomeLandingMainContent;
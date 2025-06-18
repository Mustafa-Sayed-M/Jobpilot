import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="not-found-page min-h-screen flex items-center">
            <div className="container flex items-center gap-20 max-lg:flex-col-reverse">
                {/* Not Found Content */}
                <div className="not-found-content lg:flex-1">
                    <h2 className="text-3xl mb-3 font-semibold">Opps! Page not found</h2>
                    <p className="mb-3 text-xl font-medium text-gray-600">something went wrong. It's look like the link is broken or the page is removed</p>
                    <div className="actions flex sm:items-center gap-4 max-sm:flex-col">
                        {/* Home */}
                        <Link
                            to={'/'}
                            className="flex items-center max-sm:justify-center gap-2 py-2 px-4 rounded-sm group bg-primary text-white"
                        >
                            <span>Home</span>
                            <i className="fa-solid fa-arrow-right fa-fw transition group-hover:translate-x-1"></i>
                        </Link>
                        {/* Go Back */}
                        <Link
                            to={-1}
                            className="block max-sm:text-center py-2 px-4 rounded-sm border border-primary/20 text-primary transition sm:hover:bg-primary sm:hover:border-primary sm:hover:text-white"
                        >
                            Go Back
                        </Link>
                    </div>
                </div>
                {/* Not Found Image */}
                <div className="not-found-image lg:flex-1">
                    <img
                        src="/assets/images/not-found.svg"
                        alt="Not Found Image"
                        width={400}
                        className="mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;
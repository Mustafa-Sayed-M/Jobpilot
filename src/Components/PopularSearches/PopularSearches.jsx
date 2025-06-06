import { Link } from "react-router-dom";

const itemsData = [
    'Front-end',
    'Back-end',
    'Development',
    'PHP',
    'Laravel',
    'Bootstrap',
    'Developer',
    'Team Lead',
    'Product Testing',
    'JavaSCript',
];

function PopularSearches() {
    return (
        <div className='popular-searches max-xl:hidden'>
            <div className="container flex items-center gap-4 py-3">
                {/*  */}
                <p className="font-medium text-gray-600">Popular searches: </p>
                <ul className="flex items-center gap-2">
                    {
                        itemsData.map((item, index) => (<li key={index}>
                            <Link
                                to={''}
                                className="p-2 block rounded-md text-gray-600 sm:hover:text-app-text font-medium transition sm:hover:bg-gray-200 line-clamp-1 text-nowrap"
                            >
                                {item}
                            </Link>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PopularSearches;
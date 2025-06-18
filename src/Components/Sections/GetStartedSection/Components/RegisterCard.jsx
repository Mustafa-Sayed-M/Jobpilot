import { Link } from "react-router-dom";

function RegisterCard({ type = '', bgUrl = '' }) {
    return (
        <div
            style={{
                backgroundImage: `url(${bgUrl})`,
                backgroundSize: 'cover'
            }}
            className="p-5 lg:w-1/2 rounded-md text-white"
        >
            <h3 className="text-xl font-semibold mb-2">Become a {type}</h3>
            <p className="font-medium max-w-3/4 mb-5 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            <Link
                to={'/signup'}
                state={{ role: type.toLowerCase() }}
                className="flex w-fit items-center gap-3 bg-white py-2 px-6 rounded-sm shadow-sm font-semibold text-primary transition sm:hover:bg-primary sm:hover:text-white group"
            >
                <span>Register</span>
                <i className="fa-solid fa-arrow-right fa-fw transition group-hover:translate-x-1"></i>
            </Link>
        </div>
    )
}

export default RegisterCard;
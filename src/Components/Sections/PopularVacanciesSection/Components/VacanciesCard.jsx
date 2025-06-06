import { Link } from "react-router-dom";

function VacanciesCard({ data: { name, positions_count } }) {
    return (
        <div className="vacancies-card">
            <Link
                to={`/`}
                className="sm:hover:underline sm:hover:text-primary font-semibold text-lg mb-2 block w-fit"
            >{name}</Link>
            <p className="text-gray-600 font-medium">{positions_count} Open Positions</p>
        </div>
    )
}

export default VacanciesCard;
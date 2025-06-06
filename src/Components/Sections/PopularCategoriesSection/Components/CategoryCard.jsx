import { Link } from "react-router-dom";

function CategoryCard({ categoryData: { name, icon, positions_count } }) {
    return (
        <div className="category-card">
            <Link
                to={`/`}
                className="flex items-center gap-4 p-3 rounded-md sm:hover:bg-white sm:hover:shadow-md transition group"
            >
                {/* Icon */}
                <div className="category-icon text-2xl text-primary bg-primary/10 p-5 rounded-md group-hover:bg-primary group-hover:text-white transition">
                    <i className={`fa-solid fa-${icon} fa-fw`}></i>
                </div>
                {/* Info */}
                <div className="category-info">
                    <h3 className="text-xl mb-1 font-semibold group-hover:text-primary transition">{name}</h3>
                    <p className="text-gray-400 font-medium">{positions_count} Open Position</p>
                </div>
            </Link>
        </div>
    )
}

export default CategoryCard;
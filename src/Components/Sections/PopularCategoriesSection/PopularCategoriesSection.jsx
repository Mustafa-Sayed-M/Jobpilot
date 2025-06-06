import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import popularCategoriesData from '../../../Data/popularCategories.json';
import CategoryCard from "./Components/CategoryCard";

function PopularCategoriesSection() {
    return (
        <section className="popular-categories-section py-10" id="popularCategories">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Popular Categories"
                >
                    <Link
                        to={`/categories`}
                        className="flex items-center gap-2 py-2 px-4 rounded-md text-primary font-semibold border border-primary/10 transition sm:hover:bg-primary sm:hover:text-white"
                    >View All</Link>
                </SectionHeader>
                {/* Categories Grid */}
                <div className="categories-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                    {
                        popularCategoriesData.map((category, index) => (<CategoryCard categoryData={category} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularCategoriesSection;
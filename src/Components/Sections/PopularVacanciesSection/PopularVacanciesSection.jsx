import SectionHeader from "../Components/SectionHeader";
import popularVacanciesData from "../../../Data/popularVacancies.json";
import VacanciesCard from "./Components/VacanciesCard";

function PopularVacanciesSection() {
    return (
        <section className="popular-vacancies-section py-10" id="popularVacancies">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Most Popular Vacancies"
                />
                {/* Vacancies Grid */}
                <div className="vacancies-grid grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
                    {
                        popularVacanciesData.map((vacanciesItemData, index) => (<VacanciesCard data={vacanciesItemData} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularVacanciesSection;
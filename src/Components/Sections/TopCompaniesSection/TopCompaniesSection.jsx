import SectionHeader from "../Components/SectionHeader";
import topCompaniesData from '../../../Data/topCompanies.json';
import EmployersGrid from "../../EmployersGrid/EmployersGrid";

function TopCompaniesSection() {
    return (
        <section className="top-companies-section py-10" id="topCompanies">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Top Companies"
                />
                {/* Employers Grid */}
                <EmployersGrid employersList={topCompaniesData.slice(0, 6)} />
            </div>
        </section>
    )
}

export default TopCompaniesSection;
import FeaturedJobsSection from "../../Components/Sections/FeaturedJobsSection/FeaturedJobsSection";
import GetStartedSection from "../../Components/Sections/GetStartedSection/GetStartedSection";
import HomeLandingSection from "../../Components/Sections/HomeLandingSection/HomeLandingSection";
import HowItWeWorkSection from "../../Components/Sections/HowItWeWorkSection/HowItWeWorkSection";
import PopularCategoriesSection from "../../Components/Sections/PopularCategoriesSection/PopularCategoriesSection";
import PopularVacanciesSection from "../../Components/Sections/PopularVacanciesSection/PopularVacanciesSection";
import TestimonialsSection from "../../Components/Sections/TestimonialsSection/TestimonialsSection";
import TopCompaniesSection from "../../Components/Sections/TopCompaniesSection/TopCompaniesSection";

function HomePage() {
    return (
        <div className="home-page">
            {/* Home Landing Page Section */}
            <HomeLandingSection />
            {/* Popular Vacancies Section */}
            <PopularVacanciesSection />
            {/* How It We Work Section */}
            <HowItWeWorkSection />
            {/* Popular Categories Section */}
            <PopularCategoriesSection />
            {/* Featured Jobs Section */}
            <FeaturedJobsSection />
            {/* TopCompanies Section */}
            <TopCompaniesSection />
            {/* Testimonials Section */}
            <TestimonialsSection />
            {/* Get Started Section */}
            <GetStartedSection />
        </div>
    )
}

export default HomePage;
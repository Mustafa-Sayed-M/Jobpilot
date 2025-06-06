import Features from "./Components/Features";
import HomeLandingHero from "./Components/HomeLandingHero";
import HomeLandingMainContent from "./Components/HomeLandingMainContent";

function HomeLandingSection() {
    return (
        <section className="home-landing-section bg-section py-20">
            <div className="container">
                {/* Content Wrapper */}
                <div className="content-wrapper flex items-center  gap-20 max-xl:flex-col-reverse mb-10">
                    {/* Main Content */}
                    <HomeLandingMainContent />
                    {/* Hero  */}
                    <HomeLandingHero />
                </div>
                {/* Features */}
                <Features />
            </div>
        </section>
    )
}

export default HomeLandingSection;
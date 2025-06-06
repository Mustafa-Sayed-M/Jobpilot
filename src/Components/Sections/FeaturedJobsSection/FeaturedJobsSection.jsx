import { Link } from "react-router-dom";
import SectionHeader from "../Components/SectionHeader";
import featuredJobsData from '../../../Data/featuredJobs.json';
import JobsGrid from "../../JobsGrid/JobsGrid";

function FeaturedJobsSection() {
    return (
        <section className="featured-jobs-section py-10" id="featuredJobs">
            <div className="container">
                {/* Section Header */}
                <SectionHeader
                    title="Featured Jobs"
                >
                    <Link
                        to={`/find-jobs`}
                        className="flex items-center gap-2 py-2 px-4 rounded-md text-primary font-semibold border border-primary/10 transition sm:hover:bg-primary sm:hover:text-white"
                    >View All</Link>
                </SectionHeader>
                {/* Jibs Grid */}
                <JobsGrid jobsList={featuredJobsData.slice(0, 12)} />
            </div>
        </section>
    )
}

export default FeaturedJobsSection;
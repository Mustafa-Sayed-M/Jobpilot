import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

function MyJobsPage() {
    return (
        <div className="my-jobs-page">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="My Jobs"
                breadcrumbs={[
                    {
                        to: "/", label: "Home",
                    },
                    {
                        to: "/my-jobs", label: "My Jobs",
                    }
                ]}
            />
        </div>
    )
}

export default MyJobsPage;
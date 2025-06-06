import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

function ApplicationsPage() {
    return (
        <div className="applications-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Applications"
                breadcrumbs={[
                    {
                        to: "/", label: "Home",
                    },
                    {
                        to: "/applications", label: "Applications",
                    }
                ]}
            />
        </div>
    )
}

export default ApplicationsPage;
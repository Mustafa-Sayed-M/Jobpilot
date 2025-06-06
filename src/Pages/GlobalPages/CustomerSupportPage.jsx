import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

function CustomerSupportPage() {
    return (
        <div className="customer-support-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Customer Support"
                breadcrumbs={[
                    {
                        to: "/", label: "Home",
                    },
                    {
                        to: "/customer-support", label: "Customer Support",
                    }
                ]}
            />
        </div>
    )
}

export default CustomerSupportPage;
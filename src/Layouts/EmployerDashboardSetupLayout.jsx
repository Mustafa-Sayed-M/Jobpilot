import { Outlet } from "react-router-dom";
import Copyrights from "../Components/Copyrights/Copyrights";
import Header from "../Components/Header/Header";

function EmployerDashboardSetupLayout() {
    return (
        <div className="employer-dashboard-setup-layout">
            {/* Header */}
            <Header />
            {/* Tabs */}
            <div className="tabs">
                <div className="container">
                    Tabs
                </div>
            </div>
            {/* Outlet */}
            <Outlet />
            {/* Copyrights */}
            <Copyrights />
        </div>
    )
}

export default EmployerDashboardSetupLayout;
import { Outlet } from "react-router-dom";

function EmployerDashboardSetup() {
    return (
        <div className="employer-dashboard">
            <div className="container">
                {/* Tabs */}
                <div className="tabs">Tabs</div>
                {/* Outlet */}
                <Outlet />
            </div>
        </div>
    )
}

export default EmployerDashboardSetup;
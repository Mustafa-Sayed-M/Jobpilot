import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Copyrights from "../Components/Copyrights/Copyrights";

function CandidateDashboardLayout() {
    return (
        <div className="candidate-dashboard-layout">
            {/* Nav */}
            <Nav />
            {/* Container */}
            <div className="container flex">
                {/* Sidebar */}
                <aside className="w-[260px] border-r">
                    Sidebar
                </aside>
                {/* Main Content */}
                <main className="main-content flex-1 p-5">
                    {/* Outlet */}
                    <Outlet />
                </main>
            </div>
            {/* Copyrights */}
            <Copyrights />
        </div>
    )
}

export default CandidateDashboardLayout;
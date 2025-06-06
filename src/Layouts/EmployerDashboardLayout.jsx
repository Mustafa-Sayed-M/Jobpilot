import { Outlet } from "react-router-dom";
import Copyrights from "../Components/Copyrights/Copyrights";
import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header";

function EmployerDashboardLayout() {
    return (
        <div className="employer-dashboard-layout">
            {/* Nav */}
            <Nav />
            {/* Header */}
            <Header />
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

export default EmployerDashboardLayout;
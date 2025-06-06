import { Outlet } from "react-router-dom";

function EmployerDashboard() {
    return (
        <div className="employer-dashboard">
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
        </div>
    )
}

export default EmployerDashboard;
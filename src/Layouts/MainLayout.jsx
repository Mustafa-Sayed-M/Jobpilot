import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function MainLayout() {
    return (
        <div className="main-layout">
            {/* Nav */}
            <Nav />
            {/* Header */}
            <Header />
            {/* Outlet */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default MainLayout;
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function InnerPagesLayout() {
    return (
        <div className="inner-pages-layout">
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

export default InnerPagesLayout;
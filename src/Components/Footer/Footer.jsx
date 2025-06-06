import { Link } from "react-router-dom";
import Copyrights from "./Components/Copyrights";
import AppLogo from "../Atoms/AppLogo";

const linksComponentsData = [
    {
        name: "Quick Links",
        links: [
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "", label: "Pricing" },
            { to: "/blogs", label: "Blogs" },
        ]
    },
    {
        name: "Candidate",
        links: [
            { to: "", label: "Browse Jobs" },
            { to: "", label: "Browse Employers" },
            { to: "", label: "Candidate Dashboard" },
            { to: "", label: "Saved Jobs" },
        ]
    },
    {
        name: "Employers",
        links: [
            { to: "", label: "Post a Job" },
            { to: "", label: "Browse Candidates" },
            { to: "", label: "Employers Dashboard" },
            { to: "", label: "Applications" },
        ]
    },
    {
        name: "Support",
        links: [
            { to: "/faqs", label: "Faqs" },
            { to: "", label: "Privacy Policy" },
            { to: "/terms-and-conditions", label: "Terms & Conditions" }
        ]
    }
];

function Footer() {
    return (
        <footer className="bg-app-text text-white">
            {/* Main Content */}
            <div className="main-content py-10">
                <div className="container flex items-start gap-10">
                    {/* About */}
                    <div className="footer-about">
                        {/* App Logo */}
                        <AppLogo className="text-white *:text-white mb-3" />
                        {/* Call us */}
                        <div className="flex items-center gap-2 mb-3">
                            <p className="text-gray-400 font-medium">Call us: </p>
                            <a href="tel:+20 1122124968">+20 1122124968</a>
                        </div>
                        {/* Location Info */}
                        <p className="text-gray-400 font-medium sm:max-w-[375px]">6391 Elvin St. Celina, Delaware 10299, New York, United States of America</p>
                    </div>
                    {/* Links Wrapper */}
                    <div className="links-wrapper flex-1 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
                        {
                            linksComponentsData.map(({ links, name }, index) => (<div className="links-component" key={index}>
                                <h3 className="mb-2 font-semibold text-lg">{name}</h3>
                                <ul className="space-y-2">
                                    {
                                        links.map(({ to, label }, index) => (<li key={index}>
                                            <Link
                                                to={to}
                                                className="flex items-center gap-2 w-fit font-medium text-gray-400 transition group sm:hover:text-white overflow-x-hidden"
                                            >
                                                <div className="transition -translate-x-full group-hover:translate-0">
                                                    <i className="fa-solid fa-arrow-right fa-fw"></i>
                                                </div>
                                                <span className="transition -translate-x-6 group-hover:translate-0">{label}</span>
                                            </Link>
                                        </li>))
                                    }
                                </ul>
                            </div>))
                        }
                    </div>
                </div>
            </div>
            {/* Copyrights */}
            <Copyrights />
        </footer>
    )
}

export default Footer;
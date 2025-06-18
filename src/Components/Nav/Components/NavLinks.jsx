import React from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../../../Contexts/NavContext";
import FlagsSelector from "../../Atoms/FlagsSelector";
import CallUs from "../../Atoms/CallUs";
import AuthLinks from "../../Atoms/AuthLinks";
import { useAppContext } from "../../../Contexts/AppContext";

const commonLinks = [
    { to: '/', label: 'Home' },
    { to: '/find-job', label: 'Find Job' }
]
const navLinksJustUser = [
    ...commonLinks,
    { to: '/find-employer', label: 'Employers' },
    { to: '/candidates', label: 'Candidates' },
    { to: '/pricing-plans', label: 'Pricing Plans' },
    { to: '/customer-support', label: 'Customer Support' },
];
const navLinksEmployerUser = [
    ...commonLinks,
    { to: '/find-candidate', label: 'Find Candidate' },
    { to: '/employer-dashboard', label: 'Dashboard' },
    { to: '/job-alerts', label: 'Job Alerts' },
    { to: '/customer-support', label: 'Customer Support' },
];
const navLinksCandidateUser = [
    ...commonLinks,
    { to: '/find-employer', label: 'Find Employer' },
    { to: '/candidate-dashboard', label: 'Dashboard' },
    { to: '/my-jobs', label: 'My Jobs' },
    { to: '/applications', label: 'Applications' },
    { to: '/customer-support', label: 'Customer Support' },
];

function NavLinks() {

    const { user, userRole } = useAppContext();

    let links = navLinksJustUser;

    switch (userRole) {
        case "employer":
            links = navLinksEmployerUser;
            break;
        case "candidate":
            links = navLinksCandidateUser;
            break;
        default:
            links = navLinksJustUser;
    };

    const { menuIsOpen, setMenuIsOpen } = useNav();
    const menuIsOpenRef = React.useRef(menuIsOpen);
    const navLinksRef = React.useRef(null);

    // Handle Menu Is Open Change
    React.useEffect(() => {
        menuIsOpenRef.current = menuIsOpen;
    }, [menuIsOpen]);

    // Handle Click Out
    React.useEffect(() => {
        const handleClickOut = () => {
            if (menuIsOpenRef.current) setMenuIsOpen(false);
        };

        document.addEventListener("click", handleClickOut);
        return () => document.removeEventListener("click", handleClickOut);
    }, [setMenuIsOpen]);

    // Handle Resize Window
    React.useEffect(() => {
        const handleResize = () => {
            if (navLinksRef.current) {
                navLinksRef.current.classList.remove('max-xl:transition')
            }

            if (window.innerWidth > 1280) {
                if (navLinksRef.current) {
                    setMenuIsOpen(false)
                }
            }

            const anchors = navLinksRef.current.querySelectorAll("a");
            anchors.forEach(link => {
                link.classList.remove('transition');
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setMenuIsOpen]);

    return (
        <div
            ref={navLinksRef}
            className={`nav-links max-xl:absolute max-xl:top-full max-xl:left-0 max-xl:w-full max-xl:z-50 max-xl:mt-3 max-xl:transition ${menuIsOpen ? 'max-xl:opacity-100' : 'max-xl:opacity-0 max-xl:pointer-events-none'}`}
        >
            <div className="max-xl:container">
                <ul
                    onClick={e => e.stopPropagation()}
                    className="flex xl:items-center gap-2 max-xl:flex-col max-xl:shadow-md max-xl:rounded-md max-xl:bg-white max-xl:p-3 max-xl:border max-xl:border-gray-200"
                >
                    {
                        links.map(({ to, label }, index) => (<li key={index}>
                            <NavLink
                                to={to}
                                onClick={() => setMenuIsOpen(false)}
                                className={({ isActive }) => `${isActive ? 'text-primary xl:before:scale-x-100  max-xl:bg-black/10' : 'sm:hover:text-primary text-gray-600 xl:before:scale-x-0 max-xl:sm:hover:bg-black/10 max-xl:bg-black/5'} block max-xl:py-2 xl:py-4 px-2 font-medium transition relative xl:before:absolute xl:before:bg-primary xl:before:left-1/2 xl:before:-translate-x-1/2 xl:before:bottom-0 xl:before:z-50 xl:before:w-[calc(100%-16px)] xl:before:h-[3px] xl:before:rounded-sm xl:before:transition max-xl:rounded-md`}
                            >{label}</NavLink>
                        </li>))
                    }
                    <li className="md:hidden">
                        <hr className="border-gray-300" />
                    </li>
                    {/* Flags Selector */}
                    <li className="md:hidden">
                        <FlagsSelector className="md:w-[150px] border-1 border-gray-200 rounded-md" />
                    </li>
                    {/* Call Us */}
                    <li className="sm:hidden">
                        <CallUs className="bg-black/5 p-2 rounded-md" />
                    </li>
                    {/* Auth Links */}
                    {
                        !user &&
                        <li className="md:hidden">
                            <AuthLinks className="max-md:*:flex-1 max-md:*:text-center max-sm:flex-col max-sm:items-start max-sm:*:w-full" />
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;
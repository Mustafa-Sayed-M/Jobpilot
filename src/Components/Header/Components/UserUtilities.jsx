import { UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../../../Contexts/AppContext";

function UserUtilities({ className = '' }) {

    const { userRole } = useAppContext();
    const [notificationsIsOpen, setNotificationsIsOpen] = React.useState(false);
    const notificationsIsOpenRef = React.useRef(notificationsIsOpen);

    React.useEffect(() => {
        notificationsIsOpenRef.current = notificationsIsOpen
    }, [notificationsIsOpen]);

    React.useEffect(() => {
        const handleClickOut = () => {
            if (notificationsIsOpenRef.current) setNotificationsIsOpen(false);
        };
        document.addEventListener('click', handleClickOut);
        return () => document.removeEventListener('click', handleClickOut);
    }, []);

    return (
        <div className={`user-utilities flex items-center gap-3 ${className}`}>
            {/* Notifications */}
            <div className="notifications relative">
                {/* Toggler */}
                <button
                    type="button"
                    onClick={e => {
                        e.stopPropagation();
                        setNotificationsIsOpen(prev => !prev);
                    }}
                    className="text-2xl"
                >
                    <i className="fa-solid fa-bell fa-fw"></i>
                </button>
                {/* Notifications Box */}
                <div
                    onClick={e => e.stopPropagation()}
                    className={`${notificationsIsOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'} notifications-box transition bg-white border border-gray-200 shadow-md p-3 rounded-md absolute min-w-20 top-full mt-2 right-2 text-nowrap font-medium`}
                >
                    Notifications Box
                </div>
            </div>
            {/* Post Job */}
            {
                userRole === 'employer' && <NavLink
                    to={'/employer-dashboard/post-job'}
                    className={({ isActive }) => `max-xl:-order-1 max-xl:me-auto py-2 px-4 rounded-sm border border-primary font-medium transition ${isActive ? 'bg-primary text-white' : 'sm:hover:bg-primary sm:hover:text-white text-primary'}`}
                >
                    Post A Jobs
                </NavLink>
            }
            {/* User Button */}
            <UserButton />
        </div>
    )
}

export default UserUtilities;
import React from "react";

const SideHeader = React.memo(({ handleClose }) => {
    return (
        <div className="side-header flex items-center justify-between p-4 border-b border-b-gray-300 sticky top-0 z-10 bg-white">
            <h3 className="font-semibold text-xl">Filters</h3>
            <button
                onClick={handleClose}
                className="text-2xl text-gray-600 transition-colors sm:hover:text-app-text"
            >
                <i className="fa-regular fa-circle-xmark fa-fw"></i>
            </button>
        </div>
    )
});

export default SideHeader;
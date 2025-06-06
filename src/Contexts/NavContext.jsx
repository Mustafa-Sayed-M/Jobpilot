import React from "react";

const NavContext = React.createContext();

export const NavContextProvider = ({ children }) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    return (
        <NavContext.Provider
            value={{
                menuIsOpen, setMenuIsOpen
            }}
        >
            {children}
        </NavContext.Provider>
    )
};

export const useNav = () => React.useContext(NavContext);
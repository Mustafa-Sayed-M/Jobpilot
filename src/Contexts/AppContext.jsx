import { useUser } from "@clerk/clerk-react";
import React from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {

    const { user } = useUser();
    const userRole = user?.unsafeMetadata?.role || 'guest';

    return (
        <AppContext.Provider
            value={{
                user, userRole
            }}
        >
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => React.useContext(AppContext);
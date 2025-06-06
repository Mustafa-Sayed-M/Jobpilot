import { AppContextProvider } from "./AppContext";
import { NavContextProvider } from "./NavContext";

function AppProviders({ children }) {
    return (
        <NavContextProvider>
            <AppContextProvider>
                {/* Children */}
                {children}
            </AppContextProvider>
        </NavContextProvider>
    )
}

export default AppProviders;
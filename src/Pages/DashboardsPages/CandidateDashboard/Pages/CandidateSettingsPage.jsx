import { Outlet } from "react-router-dom";

function CandidateSettingsPage() {
    return (
        <div className="candidate-settings-page">
            Candidate Settings Page
            {/* Outlet */}
            <Outlet />
        </div>
    )
}

export default CandidateSettingsPage;
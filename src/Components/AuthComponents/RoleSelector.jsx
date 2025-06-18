import { useLocation } from "react-router-dom";

function RoleSelector({ setFieldValue }) {

    const location = useLocation();
    const role = location.state?.role || 'employer';

    return (
        <div className="role-selector bg-gray-200 rounded-md p-4 mb-4">
            <p className="text-center opacity-75 uppercase font-medium mb-3">Create account as a</p>
            {/* Role Selectors */}
            <div className="flex sm:items-center gap-2 max-sm:flex-col">
                {/* Candidates */}
                <label className="flex-1">
                    <input
                        type="radio"
                        name="account_type"
                        className="hidden peer"
                        defaultChecked={role === 'candidate'}
                        onChange={() => setFieldValue("role", 'candidate')}
                    />
                    <div className="cursor-pointer p-2 rounded-md flex items-center justify-center gap-2 text-lg font-semibold peer-checked:bg-[#042852] peer-checked:text-white transition">
                        <i className="fa-solid fa-user fa-fw"></i>
                        <span>Candidate</span>
                    </div>
                </label>
                {/* Employers */}
                <label className="flex-1">
                    <input
                        type="radio"
                        name="account_type"
                        className="hidden peer"
                        defaultChecked={role === 'employer'}
                        onChange={() => setFieldValue("role", 'employer')}
                    />
                    <div className="cursor-pointer p-2 rounded-md flex items-center justify-center gap-2 text-lg font-semibold peer-checked:bg-[#042852] peer-checked:text-white transition">
                        <i className="fa-solid fa-building fa-fw"></i>
                        <span>Employer</span>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default RoleSelector;
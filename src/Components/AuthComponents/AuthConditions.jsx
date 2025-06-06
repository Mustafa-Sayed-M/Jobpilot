import { Link } from "react-router-dom";

function AuthConditions({ touched = {}, errors = {}, setFieldValue = () => { } }) {
    return (
        <div className="signup-conditions flex items-center gap-3 mb-7">
            <label className="relative">
                {/* My Input */}
                <input
                    type="checkbox"
                    name="signup_conditions"
                    className="hidden peer"
                    onChange={(e) => setFieldValue("signup_conditions", e.target.checked)}
                />
                {/* Custom Checkbox */}
                <div className={`
                                        ${touched.signup_conditions && errors.signup_conditions ? 'border-red-500' : 'border-primary/30'}
                                        w-6 h-6 cursor-pointer rounded-sm border flex items-center justify-center peer-checked:*:scale-100 peer-checked:border-primary peer-checked:bg-primary/5 transition
                                        `}>
                    <div className="transition scale-0 text-primary">
                        <i className="fa-solid fa-check fa-fw"></i>
                    </div>
                </div>
            </label>
            <p className="font-medium text-gray-500">I've read and agree with your <Link to={'/terms-and-conditions'} className="text-primary font-semibold cursor-pointer">Terms of Services</Link></p>
        </div>
    )
}

export default AuthConditions;
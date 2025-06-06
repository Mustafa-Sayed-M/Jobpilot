import { Link, useLocation, useNavigate } from "react-router-dom";
import AppLogo from "../../Components/Atoms/AppLogo";
import * as Yup from 'yup';
import AuthFormik from "../../Components/AuthComponents/AuthFormik";

const validationSchema = {
    email: Yup.string().email().required(),
};

function ForgetPasswordPage() {

    const navigate = useNavigate();

    const location = useLocation();
    const userEmail = location.state?.email;

    const initialValues = { email: userEmail || '' };

    const handleForgetPassword = async (values, actions) => {

        const { setSubmitting } = actions;

        try {
            // 4. Navigate to reset password page
            navigate('/reset-password');
        } catch (error) {
            console.error("Signup error:", error);
        } finally { setSubmitting(false) }
    };

    return (
        <div className="forget-password-page h-screen flex flex-col">
            {/* Container 1 */}
            <div className="container py-5">
                <AppLogo className="mx-auto w-fit" />
            </div>
            {/* Container 2 */}
            <div className="container flex-1  flex items-center py-10">
                <div className="form-wrapper max-md:w-full md:w-[750px] md:mx-auto">
                    {/* Text Header */}
                    <div className="text-head mb-5">
                        <h2 className="mb-2 font-semibold text-xl">Forget Password</h2>
                        <div className="flex items-center gap-2 mb-2">
                            <p className="font-medium opacity-75">Go back to?</p>
                            <Link to={`/signin`} className="text-primary font-semibold">Sign in</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-medium opacity-75">Don't have account?</p>
                            <Link to={`/signup`} className="text-primary font-semibold">Create Account</Link>
                        </div>
                    </div>
                    {/* Auth Formik */}
                    <AuthFormik
                        handleSubmit={handleForgetPassword}
                        initialValues={initialValues}
                        inputsList={[
                            {
                                type: "email",
                                id: "email",
                                name: "email",
                                autoComplete: 'off',
                                placeholder: "Email address",
                                defaultValue: userEmail,
                            }
                        ]}
                        validationSchema={validationSchema}
                        isRoleSelector={false}
                        isAuthMethods
                    />
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordPage
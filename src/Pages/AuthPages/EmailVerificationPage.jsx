import React from "react";
import AppLogo from "../../Components/Atoms/AppLogo";
import { useSignUp } from "@clerk/clerk-react";
import { useLocation, useNavigate } from "react-router-dom";

function EmailVerificationPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const { signUp } = useSignUp();

    const userEmail = location.state?.email || "user@example.com";

    const [code, setCode] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (isSubmitting) return;
            // 1. Verify email using code
            const result = await signUp.attemptEmailAddressVerification({ code });
            // 2. Navigate to home page
            if (result.status === 'complete') {
                navigate('/');
            }
        } catch (error) {
            console.log("Email Verification Error: ", error);
            setErrorMsg(error?.errors?.[0]?.longMessage || error.message || "Unknown error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="email-verification-page h-screen flex flex-col">
            {/* Container 1 */}
            <div className="container py-5">
                <AppLogo className="mx-auto w-fit" />
            </div>
            {/* Container 2 */}
            <div className="container flex-1  flex items-center py-10">
                <div className="form-wrapper max-md:w-full md:w-[750px] md:mx-auto">
                    {/* Text Header */}
                    <div className="text-head mb-5 text-center">
                        <h2 className="mb-2 font-semibold text-xl">Email Verification</h2>
                        <p className="font-medium text-gray-600 md:max-w-[750px]">
                            We've send an verification to
                            <span className="font-semibold text-app-text"> {userEmail}</span> to verify your email address and active your account.
                        </p>
                    </div>
                    {/* Formik */}
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                required
                                type="number"
                                name="verification_code"
                                placeholder="Verification Code"
                                onChange={e => setCode(e.target.value)}
                                className="p-2 appearance-none w-full rounded-md border-2 border-gray-200 placeholder:text-gray-400 transition placeholder:transition focus:placeholder:opacity-0 focus:border-gray-400"
                            />
                            {
                                errorMsg &&
                                <p className="mt-2 text-red-500 font-medium">{errorMsg}</p>
                            }
                        </div>
                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-primary text-white font-medium rounded-md py-4 w-full flex items-center justify-center gap-2 mb-7"
                        >
                            <span>Verify My Account</span>
                            <i className={`fa-solid fa-${isSubmitting ? 'spinner animate-spin' : 'arrow-right'} fa-fw`}></i>
                        </button>
                    </form>
                    {/* Resend Verify Code */}
                    <div className="flex items-center justify-center gap-2">
                        <p className="opacity-75 font-medium">Don't receive any code!</p>
                        <button
                            type="button"
                            title="Resend Verification Code"
                            className="text-primary font-semibold"
                        >Resend</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailVerificationPage;
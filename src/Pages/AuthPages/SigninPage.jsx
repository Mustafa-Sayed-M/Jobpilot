import { useSignIn } from "@clerk/clerk-react";
import AppLogo from "../../Components/Atoms/AppLogo";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthFormik from "../../Components/AuthComponents/AuthFormik";

const inputsList = [
    {
        type: "email",
        id: "email",
        name: "email",
        autoComplete: 'on',
        placeholder: "Email address",
    },
    {
        type: "password",
        id: "password",
        name: "password",
        placeholder: "Password",
    }
];
const initialValues = {
    email: '',
    password: ''
};
const validationSchema = {
    email: Yup.string().email().required(),
    password: Yup.string().required(),
};

function SigninPage() {

    const { signIn, setActive } = useSignIn();
    const navigate = useNavigate();

    const handleSignin = async (values, actions) => {

        const { setSubmitting, setErrors } = actions;

        try {

            const { email, password } = values;

            // 1. Create user account
            const result = await signIn.create({
                identifier: email,
                password
            });
            if (result.status !== 'complete') return;

            // 2. Activation session
            await setActive({ session: signIn.createdSessionId });

            // 3. Navigate to verification page
            navigate('/');
        } catch (error) {
            console.error("Signin error:", error);
            if (error.errors) {
                const formikErrors = {};
                error.errors.forEach(err => {
                    if (err.meta?.paramName) {
                        if (err.meta?.paramName === 'identifier') {
                            formikErrors.email = err.message;
                        }
                        formikErrors[err.meta.paramName] = err.message;
                    } else if (err.code === 'session_exists') {
                        formikErrors.email = "Your are already signed in!";
                    }
                })
                setErrors(formikErrors);
            }
        } finally { setSubmitting(false) }
    };

    return (
        <div className="signin-page h-screen flex flex-col">
            {/* Container 1 */}
            <div className="container py-5">
                <AppLogo className="mx-auto w-fit" />
            </div>
            {/* Container 2 */}
            <div className="container flex-1  flex items-center py-10">
                <div className="form-wrapper max-md:w-full md:w-[750px] md:mx-auto">
                    {/* Text Header */}
                    <div className="text-head mb-5">
                        <h2 className="mb-2 font-semibold text-xl">Create account.</h2>
                        <div className="flex items-center gap-2">
                            <p className="font-medium opacity-75">Don't have an account?</p>
                            <Link to={`/signup`} className="text-primary font-semibold">Create Account</Link>
                        </div>
                    </div>
                    {/* Auth Formik */}
                    <AuthFormik
                        authType="signin"
                        handleSubmit={handleSignin}
                        initialValues={initialValues}
                        inputsList={inputsList}
                        validationSchema={validationSchema}
                        isRoleSelector={false}
                        isAuthMethods
                    />
                </div>
            </div>
        </div>
    )
}

export default SigninPage;
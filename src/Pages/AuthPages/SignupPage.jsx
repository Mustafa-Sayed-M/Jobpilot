import { Link, useNavigate } from "react-router-dom";
import AppLogo from "../../Components/Atoms/AppLogo";
import * as Yup from 'yup';
import { useSignUp } from "@clerk/clerk-react";
import AuthFormik from "../../Components/AuthComponents/AuthFormik";

const inputsList = [
    {
        type: "text",
        id: "name",
        name: "name",
        autoComplete: 'on',
        placeholder: "Full Name",
    },
    {
        type: "text",
        id: "username",
        name: "username",
        autoComplete: 'on',
        placeholder: "Username",
    },
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
    },
    {
        type: "password",
        id: "confirmPassword",
        name: "confirm_password",
        placeholder: "Confirm Password",
    }
];
const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    role: 'employer',
    confirm_password: '',
    signup_conditions: false
};
const validationSchema = {
    name: Yup.string().required().min(4).max(32),
    username: Yup.string().required().min(4).max(32),
    role: Yup.string().required(),
    email: Yup.string().email().required(),
    signup_conditions: Yup.boolean()
        .oneOf([true], 'You must accept the terms')
        .required('Required'),
    password: Yup.string().required().min(8).max(32),
    confirm_password: Yup.string().when('password', {
        is: (val) => val && val.length > 0,
        then: (schema) =>
            schema
                .required('Please confirm your password')
                .oneOf([Yup.ref('password')], 'Passwords must match'),
        otherwise: (schema) => schema.notRequired(),
    }),
};

function SignupPage() {
    const { signUp } = useSignUp();
    const navigate = useNavigate();

    const handleSignup = async (values, actions) => {

        const { setSubmitting } = actions;

        try {

            const { name, email, password, username, role } = values;

            // 1. Create user account
            await signUp.create({
                emailAddress: email,
                password,
                username,
                unsafeMetadata: {
                    name,
                    role
                }
            });

            // 2. Send verification email
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

            // 4. Navigate to verification page
            navigate('/email-verification', { state: { email } });
        } catch (error) {
            console.error("Signup error:", error);
        } finally { setSubmitting(false) }
    };

    return (
        <div className="signup-page h-screen flex flex-col">
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
                            <p className="font-medium opacity-75">Already have account?</p>
                            <Link to={`/signin`} className="text-primary font-semibold">Log in</Link>
                        </div>
                    </div>
                    {/* Auth Formik */}
                    <AuthFormik
                        authType="signup"
                        handleSubmit={handleSignup}
                        initialValues={initialValues}
                        inputsList={inputsList}
                        validationSchema={validationSchema}
                        isAuthMethods
                        isRoleSelector
                    />
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
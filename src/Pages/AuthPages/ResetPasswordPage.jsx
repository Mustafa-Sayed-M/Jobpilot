import { useNavigate } from "react-router-dom";
import AppLogo from "../../Components/Atoms/AppLogo";
import * as Yup from 'yup';
import AuthFormik from "../../Components/AuthComponents/AuthFormik";

const inputsList = [
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
    password: '',
    confirm_password: ''
};
const validationSchema = {
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

function ResetPasswordPage() {

    const navigate = useNavigate();

    const handleResetPassword = async (values, actions) => {
        const { setSubmitting } = actions;

        try {
            // 4. Navigate to home page
            navigate('/');
        } catch (error) {
            console.log("Reset Password Error: ", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="reset-password-page h-screen flex flex-col">
            {/* Container 1 */}
            <div className="container py-5">
                <AppLogo className="mx-auto w-fit" />
            </div>
            {/* Container 2 */}
            <div className="container flex-1  flex items-center py-10">
                <div className="form-wrapper max-md:w-full md:w-[750px] md:mx-auto">
                    {/* Text Header */}
                    <div className="text-head mb-5 text-center">
                        <h2 className="mb-2 font-semibold text-xl">Reset Password</h2>
                        <p className="font-medium text-gray-600 md:max-w-[750px]">
                            Duis luctus interdum metus, ut consectetur ante consectetur sed.
                        </p>
                        <p className="font-medium text-gray-600 md:max-w-[750px]">
                            Supendisse euismod viverra massa site amet mollis.
                        </p>
                    </div>
                    {/* Auth Formik */}
                    <AuthFormik
                        authType="resetPassword"
                        handleSubmit={handleResetPassword}
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

export default ResetPasswordPage;
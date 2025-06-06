import { Formik } from "formik";
import * as Yup from 'yup';
import InputGroup from "./InputGroup";
import AuthMethods from "./AuthMethods";
import SubmitBtn from "./SubmitBtn";
import RoleSelector from "./RoleSelector";
import { Link } from "react-router-dom";
import AuthConditions from "./AuthConditions";

function AuthFormik({
    initialValues = {},
    validationSchema = {},
    handleSubmit = () => { },
    inputsList = [],
    authType = '',
    isAuthMethods = false,
    isRoleSelector = false

}) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions)
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                errors,
                touched
            }) => (
                <form onSubmit={handleSubmit}>
                    {/* Role Selector */}
                    {
                        isRoleSelector &&
                        <RoleSelector setFieldValue={setFieldValue} />
                    }
                    {/* Inputs */}
                    <div className="inputs-wrapper grid grid-cols-1 gap-2 mb-4">
                        {
                            inputsList.map(({ ...inputData }, index) => (<InputGroup
                                key={index}
                                {...inputData}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />))
                        }
                    </div>
                    {/* Signup Conditions */}
                    {
                        authType.toLowerCase() === 'signup' &&
                        <AuthConditions
                            errors={errors}
                            touched={touched}
                            setFieldValue={setFieldValue}
                        />
                    }
                    {/* Forget Password */}
                    {
                        authType.toLowerCase() === 'signin' &&
                        <Link to={'/forget-password'} className="block ms-auto text-primary font-semibold w-fit mb-4">Forget Password</Link>
                    }
                    {/* Submit */}
                    <SubmitBtn isSubmitting={isSubmitting} label="Create Account" />
                    {/* Auth Methods */}
                    {
                        isAuthMethods &&
                        <AuthMethods />
                    }
                </form>
            )}
        </Formik>
    )
}

export default AuthFormik;
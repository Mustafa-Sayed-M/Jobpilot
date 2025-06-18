import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import InputGroup from "../../Atoms/InputGroup";
import SubmitBtn from "../../Atoms/SubmitBtn";

const inputsList = [
    {
        type: "text",
        id: "name",
        name: "name",
        autoComplete: 'on',
        placeholder: "Full Name",
    },
    {
        type: "email",
        id: "email",
        name: "email",
        autoComplete: 'on',
        placeholder: "Email address",
    },
    {
        type: "text",
        id: "subject",
        name: "subject",
        placeholder: "Subject",
    }
];
const textareaList = [
    {
        id: "message",
        name: "message",
        autoComplete: 'on',
        placeholder: "Message",
    }
];
const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
};
const validationSchema = {
    name: Yup.string().required().min(4).max(32),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    message: Yup.string().required().min(10).max(100),
};

function FormContact() {
    return (
        <section className="form-contact py-20">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Main Content */}
                <div className="main-content">
                    <Link
                        to={''}
                        className="text-primary font-semibold mb-4 block"
                    >Who we are</Link>
                    <h2 className="mb-5 font-semibold text-4xl">We care about customer services</h2>
                    <p className="text-gray-600 font-medium mb-3">
                        Want touch? We'd love to hear from you! Get in touch with our customer Success
                        Team to inquire about speaking events, advertising rates, or jus say hello.
                    </p>
                    <Link
                        to={''}
                        className="block w-fit rounded-sm bg-primary py-2 px-4 text-white transition sm:hover:bg-white sm:hover:text-primary sm:hover:shadow-xl border border-primary"
                    >
                        Email Support
                    </Link>
                </div>
                {/* Formik Container */}
                <div className="formik-container border border-gray-200 shadow-lg bg-white rounded-md p-4">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={Yup.object(validationSchema)}
                        onSubmit={(values, { setIsSubmitting }) => {
                            console.log(values);
                            setIsSubmitting(false);
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
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
                                {/* Textarea */}
                                <div className="textarea-wrapper mb-4">
                                    {
                                        textareaList.map(({ ...textareaData }, index) => (<div className='textarea-group' key={index}>
                                            {/* Input */}
                                            <textarea
                                                {...textareaData}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className="p-2 w-full rounded-md border-2 border-gray-200 placeholder:text-gray-400 transition placeholder:transition focus:placeholder:opacity-0 focus:border-gray-400 resize-none min-h-[120px]"
                                            ></textarea>
                                            {/* Error Message */}
                                            <ErrorMessage name={textareaData.name} component={'p'} className="mt-2 text-red-500 font-medium capitalize" />
                                        </div>))
                                    }
                                </div>
                                {/* Submit */}
                                <SubmitBtn
                                    isSubmitting={isSubmitting}
                                    label="Send Message"
                                    icon="paper-plane"
                                />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default FormContact;
import { ErrorMessage } from "formik";

function InputGroup({ className = '', onBlur, onChange, ...inputData }) {
    return (
        <div className={`input-group ${className}`}>
            {/* Input */}
            <input
                {...inputData}
                onBlur={onBlur}
                onChange={onChange}
                className="p-2 w-full rounded-md border-2 border-gray-200 placeholder:text-gray-400 transition placeholder:transition focus:placeholder:opacity-0 focus:border-gray-400"
            />
            {/* Error Message */}
            <ErrorMessage name={inputData.name} component={'p'} className="mt-2 text-red-500 font-medium capitalize" />
        </div>
    )
}

export default InputGroup;
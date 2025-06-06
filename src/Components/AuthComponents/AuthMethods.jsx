function AuthMethods() {
    return (
        <div className="signup-methods">
            <p className="mb-5 text-center font-medium opacity-75">OR</p>
            {/* Methods */}
            <div className="methods flex sm:items-center gap-3 max-sm:flex-col">
                {/* Facebook */}
                <button
                    type="button"
                    title="Signup With Facebook Account"
                    className="py-2 px-4 flex items-center justify-center gap-2 flex-1 border border-gray-400 rounded-md"
                >
                    <i className="fa-brands fa-facebook fa-fw text-primary"></i>
                    <p className="text-gray-600 font-medium">Sign up with Facebook</p>
                </button>
                {/* Google */}
                <button
                    type="button"
                    title="Signup With Google Account"
                    className="py-2 px-4 flex items-center justify-center gap-2 flex-1 border border-gray-400 rounded-md"
                >
                    <i className="fa-brands fa-google fa-fw text-primary"></i>
                    <p className="text-gray-600 font-medium">Sign up with Google</p>
                </button>
            </div>
        </div>
    )
}

export default AuthMethods;
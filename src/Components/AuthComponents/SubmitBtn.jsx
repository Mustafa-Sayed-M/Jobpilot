function SubmitBtn({ isSubmitting, label = '' }) {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white font-medium rounded-md py-4 w-full flex items-center justify-center gap-2 mb-7"
        >
            <span>{label}</span>
            <i className={`fa-solid fa-${isSubmitting ? 'spinner animate-spin' : 'arrow-right'} fa-fw`}></i>
        </button>
    )
}

export default SubmitBtn;
function SubmitBtn({ isSubmitting, label = '', icon = 'arrow-right' }) {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white font-medium rounded-sm py-4 w-full flex items-center justify-center gap-2 mb-7 transition sm:hover:shadow-xl"
        >
            <span>{label}</span>
            <i className={`fa-solid fa-${isSubmitting ? 'spinner animate-spin' : icon} fa-fw`}></i>
        </button>
    )
}

export default SubmitBtn;
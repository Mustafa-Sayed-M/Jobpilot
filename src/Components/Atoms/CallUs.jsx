function CallUs({ className = '' }) {
    return (
        <a
            href="tel:+20 1122124968"
            title="Call us"
            target="_blank"
            className={`flex items-center gap-2 font-semibold ${className}`}
        >
            <i className="fa-solid fa-phone fa-fw"></i>
            <span>+20 1122124968</span>
        </a>
    )
}

export default CallUs;
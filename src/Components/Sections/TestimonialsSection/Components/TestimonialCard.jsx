function TestimonialCard({ testimonialData: { content, author } }) {
    return (
        <div className='testimonial-card p-5 bg-white rounded-md shadow-md'>
            {/* Rating */}
            <ul className='flex items-center gap-1 mb-3'>
                {
                    Array.from({ length: 5 }).map((_, index) => (<li key={index}>
                        <i className='fa-solid fa-star fa-fw text-yellow-500'></i>
                    </li>))
                }
            </ul>
            {/* Content */}
            <p className='text-gray-400 mb-10'>{content}</p>
            {/* Author Info */}
            <div className='author-info flex items-center gap-3'>
                {/* Author Avatar */}
                <img
                    src={author.avatar_url}
                    alt={author.name}
                    width={50}
                    height={50}
                    className='rounded-full aspect-square object-cover'
                />
                {/* Author Personal Info */}
                <div className='author-personal-info'>
                    {/* Name */}
                    <h3 className='font-semibold mb-1'>{author.name}</h3>
                    {/* Job Title */}
                    <p className='text-gray-400'>{author.job_title}</p>
                </div>
                {/* Quote Icon */}
                <div className='text-4xl ms-auto opacity-50'>
                    <i className='fa-solid fa-quote-left fa-fw'></i>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;
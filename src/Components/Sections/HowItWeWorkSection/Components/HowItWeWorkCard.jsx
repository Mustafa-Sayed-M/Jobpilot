function HowItWeWorkCard({ data: { icon, name, description } }) {
    return (
        <div className='how-it-we-work-card text-center p-5 rounded-md sm:hover:bg-white sm:hover:shadow-md transition group'>                            {/* Icon */}
            <div className='icon w-20 h-20 rounded-full flex items-center justify-center bg-white text-primary text-2xl mb-4 transition mx-auto group-hover:bg-primary group-hover:text-white'>
                <i className={`fa-solid fa-${icon} fa-fw transition`}></i>
            </div>
            {/* Name */}
            <h3 className='text-lg font-semibold mb-2'>{name}</h3>
            {/* Description */}
            <p className='text-gray-600 font-medium'>{description}</p>
        </div>
    )
}

export default HowItWeWorkCard;
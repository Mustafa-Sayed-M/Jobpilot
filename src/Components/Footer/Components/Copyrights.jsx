import socialProfilesData from '../../../Data/socialProfiles.json';

function Copyrights() {
    return (
        <div className="copyrights py-3 border-t border-t-gray-700">
            <div className="container flex items-center justify-between">
                {/* Copyrights Text */}
                <p className="font-medium text-gray-400">@ 2025 Jobpilot - Job Portal. All rights Reserved</p>
                {/* Social Profiles */}
                <ul className='flex items-center gap-1'>
                    {
                        socialProfilesData.map(({ icon, name, href }, index) => (<li key={index}>
                            <a
                                href={href}
                                target="_blank"
                                className="transition sm:hover:text-white text-gray-400 text-2xl"
                            >
                                <i className={`fa-brands fa-${icon} fa-fw`}></i>
                                <span className="sr-only">{name}</span>
                            </a>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Copyrights;
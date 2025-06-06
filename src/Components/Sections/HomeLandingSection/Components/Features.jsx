import featuresData from '../../../../Data/features.json';

const FeatureCard = ({ featureData: { icon, count, name } }) => {
    return (
        <div className="feature-card p-3 rounded-md bg-white flex items-center gap-3 transition sm:hover:shadow-md group max-sm:justify-between">
            {/* Icon */}
            <div className="feature-icon text-2xl text-primary bg-primary/10 p-5 rounded-md group-hover:bg-primary group-hover:text-white transition">
                <i className={`fa-solid fa-${icon} fa-fw`}></i>
            </div>
            {/* Feature Info */}
            <div className="feature-info sm:flex-1">
                <h3 className="font-semibold text-xl mb-1">{count}</h3>
                <p className="text-gray-600 font-medium">{name}</p>
            </div>
        </div>
    )
}

function Features() {
    return (
        <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {
                featuresData.map((feature, index) => (<FeatureCard featureData={feature} key={index} />))
            }
        </div>
    )
}

export default Features;
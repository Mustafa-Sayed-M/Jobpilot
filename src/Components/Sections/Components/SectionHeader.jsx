function SectionHeader({ title = '', children }) {
    return (
        <div className="section-header mb-10 flex items-center justify-between">
            {/* Title */}
            <h2 className="font-bold text-lg sm:text-2xl">{title}</h2>
            {/* Children */}
            {children}
        </div>
    )
}

export default SectionHeader;
const Tag = ({ label }) => {
    return (
        <span className="px-3 py-1 text-xs font-mono rounded-full border border-[#e4e4e4] dark-border-[#1f1f1f] text-[#555555] dark:text-[##a0a0a0] bg-transparent">
            {label}
        </span>
    )
}

export default Tag
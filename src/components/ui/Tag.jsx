const Tag = ({ label, iconMap }) => {
    const icon = iconMap?.[label]

    return(
        <div 
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.375rem 0.75rem",
                borderRadius: "999px",
                border: "1px solid"
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-[#f9f9f9] dark:bg-[#1a1a1a]"
        >
            {icon && (
                <img 
                    src={icon}
                    alt={label}
                    style={{ width: "0.875rem", height: "0.875rem", objectFit: "contain" }}
                    className={`${["GitHub", "Framer Motion", "Express"].includes(label) ? "dark:invert" : ""}`}
                />
            )}
            <span 
                style={{ fontSize: "0.7rem" }}
                className="font-mono text-[#555555] dark:text-[#00ff9f]">
                    {label}
                </span>
        </div>
    )
}

export default Tag
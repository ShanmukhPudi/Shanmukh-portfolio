const Button = ({ href, variant = "primary", children, ...props }) => {
    const base = "px-8 py-4 font-mono text-sm font-medium rounded transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

    const variants = {
        primary: "bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 focus-visible:outline-[#008f5a]",
        outline: "border border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black focus-visible:outline-[#008f5a]",
    }

    return (

        <a
        href={href}
        className={`${base} ${variants[variant]}`}
        {...props}
        >
            {children}
        </a>
    )
}

export default Button
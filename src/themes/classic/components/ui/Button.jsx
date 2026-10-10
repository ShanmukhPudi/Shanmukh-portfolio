const Button = ({ href, variant = "primary", children, ...props }) => {
    const base = "inline-block font-mono font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide"

  const variants = {
    primary: "bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80",
    outline: "border border-[##008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black",
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
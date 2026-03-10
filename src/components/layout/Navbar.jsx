import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? "bg-[#f9f9f9]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#e4e4e4] dark:border-[#1f1f1f]"
          : "bg-[#f9f9f9] dark:bg-[#0a0a0a]"
        }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between"
      >

        {/* Logo */}
        <a 
          href="#hero"
          className="font-mono text-[#008f5a] dark:text-[#00ff9f] text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Shanmukh - Back to top"
        >
          &gt;_ shanmukh
        </a>

        {/* Desktop Nav Links */}
        <ul
          role="list"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-base font-medium text-[#111111] dark:text-[#e8e8e8] hover:text-[#008f5a] dark:hover:text-[#00ff9f] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side — Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 border border-[#008f5a] dark:border-[#00ff9f] text-black dark:text-[#00ff9f] font-mono text-xs rounded hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
            aria-label="Toggle dark and light mode"
          >
            {isDark ? "[ light ]" : "[ dark ]"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#111111] dark:text-[#e8e8e8] hover:text-[#008f5a] dark:hover:text-[#00ff9f] transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          className="md:hidden bg-[#f9f9f9] dark:bg-[#0a0a0a] border-t border-[#e4e4e4] dark:border-[#1f1f1f] px-6 py-4"
        >
          <ul role="list" className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                
                <a 
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#111111] dark:text-[#e8e8e8] hover:text-[#008f5a] dark:hover:text-[#00ff9f] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
// The Universe B navigation. A complete diff model from the original. Consists editorial, geometric, sharp look.

import { useState, useEffect, use } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const UBNavbar = ({ toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: "smooth" })
        setMenuOpen(false)
    }

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 50,
                    transition: "background 0.4s, border-color 0.4s",
                    background: isScrolled ? "rgba(238,229,218,0.92)" : "transparent",
                    backdropFilter: isScrolled ? "blur(12px)" : "none",
                    borderBottom: isScrolled ? "1px solid #C8BF4" : "1px solid transparent",
                }}
            >
                <nav
                    role="navigation"
                    aria-label="Universe B navigation"
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        padding: "0 48px",
                        height: "72px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo = bold, geometric, uppercase */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, "#hero")}
                        aria-label="Shanmukh - back to top"
                        style={{
                            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "var(--ub-fg, #262424)",
                            textDecoration: "none",
                            transition: "color 0.2s",
                        }}
                        onMouseEnter={e => e.target.style.color = "#0F9E99"}
                        onMouseLeave={e => e.target.style.color = "var(--ub-fg, #262424)"}
                    >
                        Shanmukh
                    </a>
                    
                    {/* Desktop links */}
                    <ul
                        role="list"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "48px",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                        }}
                        className="ub-nav-desktop"
                    >
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    style={{
                                        fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                                        fontWeight: 500,
                                        fontSize: "0.85rem",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        color: "var(--ub-fg-muted, #5A5755)",
                                        textDecoration: "none",
                                        transition: "color 0.2s",
                                        position: "relative",
                                    }}
                                    onMouseEnter={e => e.target.style.color = "#0F9E99"}
                                    onMouseLeave={e => e.target.style.color = "var(--ub-fg-muted, #5A5755)"}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right side */}
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

                        {/* Change realm - sharp rect button, teal border */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Switch back to dark mode"
                            style={{
                                fontFamily: "var(--ub-fg-heading, 'Space Grotesk', sans-serif)",
                                fontWeight: 600,
                                fontSize: "0.7rem",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "var(--ub-accent, #0F9E99)",
                                background: "transparent",
                                border: "0.5px solid var(--ub-accent, #0F9E99)",
                                padding: "8px 16px",
                                borderRadius: 0,
                                cursor: "pointer",
                                transition: "background 0.2s, color 0.2s",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "#0F9E99"
                                e.currentTarget.style.color = "#EEE5DA"
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "transparent"
                                e.currentTarget.style.color = "#0F9E99"
                            }}
                        >
                            Change Realm
                        </button>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            style={{
                                display: "none",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "4px",
                            }}
                            className="ub-hamburger"
                        >
                            <span style={{
                                display: "block",
                                width: "22px",
                                height: "1.5px",
                                background: "#262424",
                                marginBottom: "6px",
                                transition: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                            }} />
                            <span style={{
                                display: "block",
                                width: "22px",
                                height: "1.5px",
                                background: "#262424",
                                transition: "opacity 0.2s",
                                opacity: menuOpen ? 0 : 1,
                            }}/>
                            <span style={{
                                display: "block",
                                width: "22px",
                                height: "1.5px",
                                background: "#262424",
                                marginTop: "6px",
                                transition: "transform 0.2s",
                                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                            }}/>
                        </button>
                    </div>
                </nav>
            </header>
            
            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                        style={{
                            position: "fixed",
                            top: "72px",
                            left: 0,
                            right: 0,
                            zIndex: 49,
                            background: "#EEE5DA",
                            borderBottom: "1px solid #C8BFB4",
                            padding: "32px 48px 40px",
                        }}
                    >
                        <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {NAV_LINKS.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3 }}
                                    style={{
                                        borderBottom: "1px solid #C8BFB4",
                                        padding: "16px 0",
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        style={{
                                            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                                            fontWeight: 700,
                                            fontSize: "1.4rem",
                                            letterSpacing: "0.04em",
                                            color: "#262424",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
 
            {/* Responsive overrides */}
            <style>{`
                @media (max-width: 768px) {
                .ub-nav-desktop { display: none !important; }
                .ub-hamburger { display: block !important; }
                }
            `}</style>
        </>
    )
}
 
export default UBNavbar
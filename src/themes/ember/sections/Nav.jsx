import { useState } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"

const LINKS = [
  ["Projects", "#projects"],
  ["Stack", "#stack"],
  ["Path", "#path"],
  ["Contact", "#contact"],
]

const Nav = ({ mode, onToggleMode, onSwitchRealm }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24))

  const nextMode = mode === "dark" ? "light" : "dark"

  return (
    <header className="nav" data-scrolled={scrolled || open}>
      <div className="nav-inner">
        <a href="#top" className="logo" aria-label="Back to top">
          SP<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleMode}
            aria-label={`Switch to ${nextMode} mode`}
            title={`Switch to ${nextMode} mode`}
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="chip-btn"
            onClick={onSwitchRealm}
            title="Switch to the classic Matrix theme"
          >
            Classic
          </button>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="nav-menu" aria-label="Mobile">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Nav

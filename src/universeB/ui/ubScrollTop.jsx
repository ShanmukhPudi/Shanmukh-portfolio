import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const UBScrollTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 100,
            width: "44px",
            height: "44px",
            background: "transparent",
            border: "1.5px solid #262424",
            borderRadius: 0,
            color: "#262424",
            fontSize: "1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s, color 0.2s, border-color 0.2s",
            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0F9E99"
            e.currentTarget.style.borderColor = "#0F9E99"
            e.currentTarget.style.color = "#EEE5DA"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent"
            e.currentTarget.style.borderColor = "#262424"
            e.currentTarget.style.color = "#262424"
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default UBScrollTop
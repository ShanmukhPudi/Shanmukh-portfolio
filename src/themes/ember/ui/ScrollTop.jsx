import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUp } from "lucide-react"

const ScrollTop = () => {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 300))

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="scroll-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop

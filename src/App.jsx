import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useAppTheme } from "./hooks/useAppTheme"
import EmberApp from "./themes/ember/EmberApp"

// The classic Matrix theme is archived in src/themes/classic and only loads when its realm is selected
const ClassicApp = lazy(() => import("./themes/classic/ClassicApp"))

const FLASH_COLORS = { classic: "#0a0a0a", emberDark: "#0B0D12", emberLight: "#F1F2F4" }

function App() {
  const { realm, mode, toggleRealm, toggleMode } = useAppTheme()
  const [flash, setFlash] = useState(null)
  const timers = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [realm])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const switchRealm = () => {
    // colour the flash with the realm we are heading to
    const target = realm === "ember" ? FLASH_COLORS.classic : mode === "dark" ? FLASH_COLORS.emberDark : FLASH_COLORS.emberLight
    setFlash(target)
    timers.current.push(
      setTimeout(() => {
        toggleRealm()
        timers.current.push(setTimeout(() => setFlash(null), 400))
      }, 300)
    )
  }

  return (
    <MotionConfig reducedMotion="user">
      <SpeedInsights />
      <AnimatePresence>
        {flash && (
          <motion.div
            key="realm-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", inset: 0, background: flash, zIndex: 9999, pointerEvents: "none" }}
          />
        )}
      </AnimatePresence>

      {realm === "ember" ? (
        <EmberApp mode={mode} onToggleMode={toggleMode} onSwitchRealm={switchRealm} />
      ) : (
        <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0a0a0a" }} />}>
          <ClassicApp onSwitchRealm={switchRealm} />
        </Suspense>
      )}
    </MotionConfig>
  )
}

export default App

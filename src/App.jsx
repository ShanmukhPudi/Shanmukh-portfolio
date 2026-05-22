import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomeContainer from "./containers/HomeContainer";
import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProcress";
// import BootOverlay from "./components/ui/BootOverlay";
// import useStartupAnimation from "./hooks/useStartupAnimation";

function App() {
  const { isDark, isUniverseB, toggleTheme } = useTheme();
  const [transitioning, setTransitioning] = useState(false);
  const prevIsUniverseB = useRef(isUniverseB);

  // Scroll to top when theme changes
  useEffect(() => {
    window.scrollTo(0, 0);
    prevIsUniverseB.current = isUniverseB;
  }, [isUniverseB]);

  const handleToggleTheme = () => {
    setTransitioning(true);
    setTimeout(() => {
      toggleTheme();
      setTimeout(() => setTransitioning(false), 400);
    }, 300);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={
          isUniverseB
            ? "min-h-screen"
            : "bg-[#f9f9f9] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-500"
        }
      >
        {/* Realm transition flash */}
        <AnimatePresence>
          {transitioning && (
            <motion.div
              key="realm-flash"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                inset: 0,
                background: "#262424",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>

        {/* <BootOverlay phase={phase} /> */}
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0 }}>
          {!isUniverseB && <Navbar isDark={isDark} toggleTheme={handleToggleTheme} />}
          <HomeContainer isUniverseB={isUniverseB} toggleTheme={handleToggleTheme} />
          {!isUniverseB && <Footer />}
        </motion.div>
        {!isUniverseB && <BackToTop />}
        {!isUniverseB && <ScrollProgress />}
      </div>
    </MotionConfig>
  );
}

export default App;
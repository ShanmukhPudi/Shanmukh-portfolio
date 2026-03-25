import { motion } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomeContainer from "./containers/HomeContainer";
import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProcress";
// import BootOverlay from "./components/ui/BootOverlay";
// import useStartupAnimation from "./hooks/useStartupAnimation";

function App() {
  const { isDark, toggleTheme } = useTheme()
  // const phase = useStartupAnimation()

return (
    <div className="bg-[#f9f9f9] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      {/* <BootOverlay phase={phase} /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <HomeContainer />
        <Footer />
      </motion.div>
      <BackToTop />
      <ScrollProgress />
    </div>
  )
}

export default App
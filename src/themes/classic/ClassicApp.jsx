// Classic (Matrix) theme, archived.
// Self-contained: everything it needs lives in src/themes/classic plus the shared src/constants and src/assets.
// It is lazy-loaded from App.jsx, so it costs the new design nothing unless the visitor switches realm.
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HomeContainer from "./HomeContainer"
import BackToTop from "./components/ui/BackToTop"
import ScrollProgress from "./components/ui/ScrollProcress"

const ClassicApp = ({ onSwitchRealm }) => (
  <div className="bg-[#f9f9f9] dark:bg-[#0a0a0a] min-h-screen">
    <Navbar isDark toggleTheme={onSwitchRealm} />
    <HomeContainer />
    <Footer />
    <BackToTop />
    <ScrollProgress />
  </div>
)

export default ClassicApp

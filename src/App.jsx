import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomeContainer from "./containers/HomeContainer";
import BackToTop from "./components/ui/BackToTop";
import ScrollProgress from "./components/ui/ScrollProcress";

function App() {
  const { isDark, toggleTheme } = useTheme()

return (
    <div className="bg-[#f9f9f9] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <HomeContainer />
      <Footer />
      <BackToTop />
      <ScrollProgress />
    </div>
  )
}

export default App
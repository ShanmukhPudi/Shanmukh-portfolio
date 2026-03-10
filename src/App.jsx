import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/layout/Navbar";
import HomeContainer from "./containers/HomeContainer";

function App() {
  const { isDark, toggleTheme } = useTheme()

return (
    <div className="bg-[#f9f9f9] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <HomeContainer />
    </div>
  )
}

export default App
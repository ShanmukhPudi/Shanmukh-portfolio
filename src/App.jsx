import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/layout/Navbar";

function App() {
  const { isDark, toggleTheme } = useTheme()

return (
    <div className="bg-[#f9f9f9] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main id="hero" className="pt-40 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#111111] dark:text-[#e8e8e8] mb-4">
          Shanmukh
        </h1>
        <p className="text-[#777777] dark:text-[#6b6b6b] text-lg mb-4">
          Full-Stack Developer & Automation Engineer
        </p>
        <code className="text-[#008f5a] dark:text-[#00ff9f] text-sm">
          {">_ welcome to my portfolio"}
        </code>
      </main>
    </div>
  )
}

export default App;
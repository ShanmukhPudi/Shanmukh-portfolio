import "./ember.css"
import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import Stats from "./sections/Stats"
import Projects from "./sections/Projects"
import Stack from "./sections/Stack"
import Path from "./sections/Path"
import Contact from "./sections/Contact"
import ScrollTop from "./ui/ScrollTop"

const EmberApp = ({ mode, onToggleMode, onSwitchRealm }) => (
  <div className="ember" id="top">
    <a className="skip" href="#projects">Skip to projects</a>
    <Nav mode={mode} onToggleMode={onToggleMode} onSwitchRealm={onSwitchRealm} />
    <main>
      <Hero />
      <Stats />
      <Projects />
      <Stack />
      <Path />
      <Contact />
    </main>
    <ScrollTop />
  </div>
)

export default EmberApp

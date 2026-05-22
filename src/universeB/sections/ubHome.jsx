// UBHome.jsx
// The master shell for Universe B. 
// This is what HomeContainer renders when theme === 'universeB'.
// It contains the full layer stack (L0 → L4) and will house
// all 6 sections as we build them in Phase 3 onwards.
//
// Layer 0: Base background (via .universe-b CSS class on <html>)
// Layer 1: UBAmbient — drifting organic texture
// Layer 2: UBGeoLines — geometric counter-scroll lines
// Layer 3: Content — UBNavbar + sections (built phase by phase)
// Layer 4: Cursor (Phase 6)

import UBNavbar from "../layout/ubNavbar"
import UBAmbient from "../ui/ubAmbient"
import UBGeoLines from "../ui/ubGeoLines"
import UBCursor from "../ui/ubCursor"
import UBScrollTop from "../ui/ubScrollTop"
import UBHero from "./ubHero"
import UBAbout from "./ubAbout"
import UBServices from "./ubServices"
import UBProjects from "./ubProjects"
import UBExperience from "./ubExperience"
import UBContact from "./ubContact"

const UBHome = ({ toggleTheme }) => {
  return (
    <div
      style={{
        background: "var(--ub-bg, #EEE5DA)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <UBCursor />
      <UBAmbient />
      <UBGeoLines />

      <div style={{ position: "relative", zIndex: 2 }}>
        <UBNavbar toggleTheme={toggleTheme} />
        <UBHero />
        <UBAbout />
        <UBServices />
        <UBProjects />
        <UBExperience />
        <UBContact />
      </div>

      <UBScrollTop />
    </div>
  )
}

export default UBHome
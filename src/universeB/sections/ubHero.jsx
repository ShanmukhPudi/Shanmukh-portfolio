import { motion } from "framer-motion"
import { PERSONAL } from "../../constants"
import profileImg from "../../assets/profile.jpg"
import { UB_EASE } from "../styles/ubTokens"

const UBHero = () => {
  const handleScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(24px, 5vw, 80px)",
        paddingTop: "72px",
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div style={{ flex: 1, paddingRight: "clamp(32px, 5vw, 100px)" }} className="ub-hero-left">
        <div style={{ overflow: "hidden", marginBottom: "28px" }}>
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ ...UB_EASE.strong, delay: 0.1 }}
            style={{
              fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
              fontSize: "0.72rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#0F9E99",
              margin: 0,
            }}
          >
            {PERSONAL.title}
          </motion.p>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "12px" }}>
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ ...UB_EASE.strong, delay: 0.22 }}
            style={{
              fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
              fontWeight: 700,
              fontSize: "clamp(3.2rem, 7.5vw, 6.8rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#262424",
              margin: 0,
            }}
          >
            {PERSONAL.name}
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden", marginBottom: "48px" }}>
          <motion.p
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ ...UB_EASE.strong, delay: 0.42 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)",
              color: "#5A5755",
              letterSpacing: "0.01em",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "520px",
            }}
          >
            {PERSONAL.tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...UB_EASE.soft, delay: 0.7 }}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}
        >
          <button
            onClick={() => handleScroll("#projects")}
            style={{
              fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              background: "#262424",
              color: "#EEE5DA",
              border: "1.5px solid #262424",
              padding: "14px 30px",
              borderRadius: 0,
              cursor: "pointer",
              transition: "background 0.22s, color 0.22s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0F9E99"
              e.currentTarget.style.borderColor = "#0F9E99"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#262424"
              e.currentTarget.style.borderColor = "#262424"
            }}
          >
            View Projects ↗
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            style={{
              fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#262424",
              border: "1.5px solid #262424",
              padding: "14px 30px",
              borderRadius: 0,
              cursor: "pointer",
              transition: "background 0.22s, color 0.22s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#262424"
              e.currentTarget.style.color = "#EEE5DA"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = "#262424"
            }}
          >
            Contact Me ↗
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#0F9E99",
              display: "inline-block",
              animation: "ubHeroPulse 2.2s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "#5A5755",
              letterSpacing: "0.06em",
            }}
          >
            Available for work
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...UB_EASE.standard, delay: 0.28 }}
        style={{
          flexShrink: 0,
          width: "clamp(260px, 32vw, 440px)",
          position: "relative",
        }}
        className="ub-hero-right"
      >
        <div
          style={{
            position: "absolute",
            top: "-16px",
            right: "-16px",
            width: "72px",
            height: "72px",
            borderTop: "2px solid #0F9E99",
            borderRight: "2px solid #0F9E99",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-16px",
            left: "-16px",
            width: "72px",
            height: "72px",
            borderBottom: "2px solid #0F9E99",
            borderLeft: "2px solid #0F9E99",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            overflow: "hidden",
            aspectRatio: "3/4",
            background: "#262424",
          }}
        >
          <motion.img
            src={profileImg}
            alt={PERSONAL.name}
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ ...UB_EASE.strong, delay: 0.28 }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              filter: "contrast(1.05)",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes ubHeroPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }

        @media (max-width: 1024px) {
          section#hero { flexDirection: column; }
          .ub-hero-right {
            marginTop: 36px;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          section#hero { flexDirection: column; }
          .ub-hero-left { paddingRight: 0; }
        }
      `}</style>
    </section>
  )
}

export default UBHero
import { motion } from "framer-motion"
import { ABOUT, PERSONAL } from "../../constants"
import { FADE_UP, UB_EASE } from "../styles/ubTokens"

const UBAbout = () => {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
          fontSize: "0.7rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#0F9E99",
          marginBottom: "24px",
        }}
      >
        01 — About
      </motion.p>

      <div style={{ overflow: "hidden", marginBottom: "72px" }}>
        <motion.h2
          initial={{ y: "105%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ ...UB_EASE.strong }}
          style={{
            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            color: "#262424",
            margin: 0,
          }}
        >
          Who I Am
        </motion.h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 100px)",
          alignItems: "start",
        }}
        className="ub-about-grid"
      >
        <div>
          {ABOUT.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...UB_EASE.soft, delay: i * 0.1 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                lineHeight: 1.85,
                color: "#5A5755",
                marginBottom: "28px",
              }}
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...UB_EASE.soft, delay: 0.4 }}
            style={{ marginTop: "16px" }}
          >
            <a
              href={PERSONAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#0F9E99",
                border: "1.5px solid #0F9E99",
                padding: "12px 24px",
                borderRadius: 0,
                textDecoration: "none",
                transition: "background 0.22s, color 0.22s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0F9E99"
                e.currentTarget.style.color = "#EEE5DA"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#0F9E99"
              }}
            >
              ↓ Download CV
            </a>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {ABOUT.strengths.map((strength, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...UB_EASE.standard, delay: i * 0.12 }}
              style={{
                padding: "28px 0",
                borderBottom: "1px solid #C8BFB4",
                borderTop: i === 0 ? "1px solid #C8BFB4" : "none",
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "12px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <span
                style={{
                  fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#0F9E99",
                  paddingTop: "4px",
                  flexShrink: 0,
                  transition: "transform 0.2s",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    letterSpacing: "-0.01em",
                    color: "#262424",
                    margin: "0 0 8px",
                  }}
                >
                  {strength.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "#5A5755",
                    margin: 0,
                  }}
                >
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ub-about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default UBAbout
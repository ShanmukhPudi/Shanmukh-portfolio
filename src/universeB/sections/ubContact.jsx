import { motion } from "framer-motion"
import { PERSONAL } from "../../constants"
import { UB_EASE } from "../styles/ubTokens"

const UBContact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
        maxWidth: "1400px",
        margin: "0 auto",
        textAlign: "center",
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
        05 — Contact
      </motion.p>

      <motion.h2
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ ...UB_EASE.strong }}
        style={{
          fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
          fontWeight: 700,
          fontSize: "clamp(3rem, 7vw, 6rem)",
          letterSpacing: "-0.025em",
          color: "#262424",
          margin: 0,
        }}
      >
        Let&apos;s collaborate.
      </motion.h2>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: "1.1rem",
          color: "#5A5755",
          marginTop: "24px",
          maxWidth: "760px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.7,
        }}
      >
        I&apos;m currently open for new opportunities. If you have a project, product, or team challenge,
        let&apos;s talk and build something that moves the needle.
      </p>

      <a
        href={`mailto:${PERSONAL.email}`}
        style={{
          display: "inline-block",
          marginTop: "32px",
          fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#262424",
          border: "1.5px solid #0F9E99",
          padding: "14px 24px",
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
          e.currentTarget.style.color = "#262424"
        }}
      >
        Email Me ↗
      </a>

      <div style={{
        marginTop: "32px",
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        flexWrap: "wrap",
      }}>
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" style={{ color: "#262424", textDecoration: "none" }}>
          GitHub
        </a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#262424", textDecoration: "none" }}>
          LinkedIn
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h2 { font-size: clamp(2.4rem, 9vw, 4rem); }
        }
      `}</style>
    </section>
  )
}

export default UBContact
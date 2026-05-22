import { motion } from "framer-motion"
import { ABOUT } from "../../constants"
import { UB_EASE } from "../styles/ubTokens"

const ServiceCard = ({ strength, index }) => {
  const isEven = index % 2 === 0
  const num = String(index + 1).padStart(2, "0")

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...UB_EASE.standard, delay: 0.05 }}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        gap: "clamp(20px, 3vw, 48px)",
        alignItems: "center",
        padding: "clamp(28px, 4vw, 48px) 0",
        borderBottom: "1px solid #C8BFB4",
        cursor: "default",
        transition: "padding-left 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.paddingLeft = "16px"
        e.currentTarget.style.borderBottomColor = "#0F9E99"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.paddingLeft = "0"
        e.currentTarget.style.borderBottomColor = "#C8BFB4"
      }}
      className="ub-service-card"
    >
      <span
        style={{
          fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
          fontWeight: 700,
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "#C8BFB4",
          letterSpacing: "-0.02em",
          userSelect: "none",
          transition: "color 0.2s",
        }}
        className="ub-service-num"
      >
        {num}
      </span>

      <div>
        <h3
          style={{
            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            letterSpacing: "-0.02em",
            color: "#262424",
            margin: "0 0 10px",
            lineHeight: 1.1,
          }}
        >
          {strength.title}
        </h3>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
            lineHeight: 1.7,
            color: "#5A5755",
            margin: 0,
            maxWidth: "560px",
          }}
        >
          {strength.description}
        </p>
      </div>

      <span
        style={{
          fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
          fontSize: "1.2rem",
          color: "#0F9E99",
          opacity: 0,
          transform: "translateX(-8px)",
          transition: "opacity 0.2s, transform 0.2s",
          flexShrink: 0,
        }}
        className="ub-service-arrow"
      >
        ↗
      </span>

      <style>{`
        .ub-service-card:hover .ub-service-num { color: #0F9E99; }
        .ub-service-card:hover .ub-service-arrow { opacity: 1 !important; transform: translateX(0) !important; }
      `}</style>
    </motion.div>
  )
}

const UBServices = () => {
  return (
    <section
      id="tech-stack"
      style={{
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 5vw, 80px)",
        maxWidth: "1400px",
        margin: "0 auto",
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
        02 — What I Do
      </motion.p>

      <div style={{ overflow: "hidden", marginBottom: "80px" }}>
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
          Services
        </motion.h2>
      </div>

      <div style={{ borderTop: "1px solid #C8BFB4" }}>
        {ABOUT.strengths.map((strength, i) => (
          <ServiceCard key={i} strength={strength} index={i} />
        ))}
      </div>
    </section>
  )
}

export default UBServices
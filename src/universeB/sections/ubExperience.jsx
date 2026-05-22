import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS } from "../../constants"
import { UB_EASE } from "../styles/ubTokens"

const UBExperience = () => {
  const lineRef = useRef(null)
  const isLineInView = useInView(lineRef, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
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
        04 — Journey
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
          Experience
        </motion.h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1px 1fr", gap: "0 48px" }} className="ub-timeline-grid">
        <div ref={lineRef} style={{ position: "relative", gridRow: `1 / ${EXPERIENCE.length + 2}` }}>
          <div style={{ width: "1px", height: "100%", background: "#C8BFB4", position: "absolute", top: 0, left: 0 }} />
          <motion.div
            style={{ width: "1px", background: "#0F9E99", position: "absolute", top: 0, left: 0, transformOrigin: "top" }}
            animate={isLineInView ? { height: "100%" } : { height: "0%" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {EXPERIENCE.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ ...UB_EASE.soft, delay: i * 0.12 }}
            style={{
              padding: "0 0 clamp(40px, 6vw, 72px) 0",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "start",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "-52px",
                top: "6px",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: i === 0 ? "#0F9E99" : "#C8BFB4",
                border: i === 0 ? "2px solid #EEE5DA" : "none",
                outline: i === 0 ? "2px solid #0F9E99" : "none",
                animation: i === 0 ? "ubHeroPulse 2.2s ease-in-out infinite" : "none",
              }}
            />

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
                <h3
                  style={{
                    fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    letterSpacing: "-0.01em",
                    color: "#262424",
                    margin: 0,
                  }}
                >
                  {job.role}
                </h3>
                {i === 0 && (
                  <span
                    style={{
                      fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#0F9E99",
                      border: "1px solid #0F9E99",
                      padding: "2px 8px",
                    }}
                  >
                    Current
                  </span>
                )}
              </div>

              <p
                style={{
                  fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  color: "#0F9E99",
                  margin: "0 0 12px",
                }}
              >
                {job.company}
              </p>

              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "#5A5755",
                  margin: 0,
                  maxWidth: "600px",
                }}
              >
                {job.summary}
              </p>
            </div>

            <span
              style={{
                fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "#9A9694",
                whiteSpace: "nowrap",
                paddingTop: "6px",
              }}
            >
              {job.duration}
            </span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ...UB_EASE.soft, delay: EXPERIENCE.length * 0.12 }}
          style={{ position: "relative", paddingBottom: "0" }}
        >
          <div
            style={{
              position: "absolute",
              left: "-52px",
              top: "6px",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#C8BFB4",
            }}
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.9rem",
              color: "#5A5755",
              margin: 0,
            }}
          >
            {EDUCATION}
          </p>
        </motion.div>
      </div>

      <div style={{ display: "flex", gap: "22px", marginTop: "40px", flexWrap: "wrap" }}>
        {ACHIEVEMENTS.map((item, i) => (
          <div
            key={i}
            style={{
              minWidth: "180px",
              padding: "16px",
              background: "#fff",
              border: "1px solid #C8BFB4",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#262424",
              }}
            >
              {item.value}
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#5A5755",
                fontSize: "0.85rem",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UBExperience
import { motion } from "framer-motion"
import { PROJECTS } from "../../constants"
import { UB_EASE } from "../styles/ubTokens"

const PROJECT_BG = [
  "linear-gradient(135deg, #262424 0%, #3d3a38 100%)",
  "linear-gradient(135deg, #0B7A76 0%, #0F9E99 100%)",
  "linear-gradient(135deg, #A0430A 0%, #c4561a 100%)",
]

const ProjectCard = ({ project, index }) => {
  const isFeature = index === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...UB_EASE.standard, delay: index * 0.12 }}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        gridColumn: isFeature ? "1 / -1" : "auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(".ub-proj-overlay").style.opacity = "1"
        e.currentTarget.querySelector(".ub-proj-img").style.transform = "scale(1.04)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector(".ub-proj-overlay").style.opacity = "0"
        e.currentTarget.querySelector(".ub-proj-img").style.transform = "scale(1)"
      }}
    >
      <div
        className="ub-proj-img"
        style={{
          background: PROJECT_BG[index] || PROJECT_BG[0],
          aspectRatio: isFeature ? "16/7" : "4/3",
          transition: "transform 0.5s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
            }}
          />
        )}
        <span
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#EEE5DA",
            background: "rgba(238,229,218,0.15)",
            border: "1px solid rgba(238,229,218,0.3)",
            padding: "5px 10px",
            backdropFilter: "blur(4px)",
          }}
        >
          {project.status}
        </span>
      </div>

      <div
        className="ub-proj-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15,158,153,0.12)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
            fontSize: "1.4rem",
            color: "#EEE5DA",
            transform: "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          ↗
        </span>
      </div>

      <div
        style={{
          padding: "20px 0 8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          borderTop: "1px solid #C8BFB4",
          marginTop: "1px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
              fontWeight: 700,
              fontSize: isFeature ? "1.3rem" : "1.05rem",
              letterSpacing: "-0.01em",
              color: "#262424",
              margin: "0 0 6px",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "#5A5755",
              margin: "0 0 12px",
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tags?.slice(0, 4).map((tag, t) => (
              <span
                key={t}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.06em",
                  color: "#5A5755",
                  border: "1px solid #C8BFB4",
                  padding: "3px 8px",
                  borderRadius: 0,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#262424",
                textDecoration: "none",
                borderBottom: "1px solid #262424",
                paddingBottom: "2px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#0F9E99"
                e.currentTarget.style.borderColor = "#0F9E99"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#262424"
                e.currentTarget.style.borderColor = "#262424"
              }}
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--ub-font-heading, 'Space Grotesk', sans-serif)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#0F9E99",
                textDecoration: "none",
                borderBottom: "1px solid #0F9E99",
                paddingBottom: "2px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const UBProjects = () => {
  return (
    <section
      id="projects"
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
        03 — Work
      </motion.p>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "64px",
        gap: "24px",
        flexWrap: "wrap",
      }}>
        <div style={{ overflow: "hidden" }}>
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
            Selected Projects
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            color: "#9A9694",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {PROJECTS.length} Projects
        </motion.p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(24px, 3vw, 48px)",
        }}
        className="ub-projects-grid"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .ub-projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

export default UBProjects
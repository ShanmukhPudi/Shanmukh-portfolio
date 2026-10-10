import { motion } from "framer-motion"

const Hexagon = ({ skill, color, isSelected, isDimmed, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isDimmed ? 0.25 : 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.08,
        transition: { duration: 0.2 },
      }}
      style={{ position: "relative", cursor: "default" }}
    >
      {/* Outer hexagon shape */}
      <div
        style={{
          width: "90px",
          height: "90px",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: isSelected
            ? `${color.glow}`
            : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          transition: "all 0.4s ease",
        }}
      >
        {/* Border hexagon — slightly smaller */}
        <div
          style={{
            position: "absolute",
            inset: "2px",
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            background: isSelected
              ? `linear-gradient(135deg, ${color.border}33, ${color.border}11)`
              : "linear-gradient(135deg, #1f1f1f, #111111)",
            border: "none",
            boxShadow: isSelected
              ? `0 0 20px ${color.glow}, 0 0 40px ${color.glow}`
              : "none",
            transition: "all 0.4s ease",
          }}
        />

        {/* Hexagon outline using SVG */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          viewBox="0 0 90 90"
          fill="none"
        >
          <polygon
            points="45,2 88,23.5 88,66.5 45,88 2,66.5 2,23.5"
            fill="none"
            stroke={isSelected ? color.border : "#2a2a2a"}
            strokeWidth={isSelected ? "2" : "1"}
            style={{ transition: "all 0.4s ease" }}
          />
        </svg>

        {/* Content — icon + name */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <img
            src={skill.icon}
            alt={skill.name}
            style={{
              width: "28px",
              height: "28px",
              objectFit: "contain",
              filter: isSelected ? "none" : "grayscale(20%)",
              transition: "all 0.4s ease",
            }}
            className={`${["GitHub", "Framer Motion", "Express"].includes(skill.name) ? "dark:invert" : ""}`}
          />
          <span
            style={{
              fontSize: "0.55rem",
              fontWeight: "600",
              textAlign: "center",
              lineHeight: "1.2",
              maxWidth: "70px",
              color: isSelected ? color.text : "#6b6b6b",
              transition: "color 0.4s ease",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default Hexagon
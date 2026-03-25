import { motion } from "framer-motion"
import Hexagon from "./Hexagon"

const HoneycombCluster = ({ group, color, isSelected, isAllSelected }) => {
  const isDimmed = !isAllSelected && !isSelected

  // Honeycomb offset pattern — every odd row shifts right
  const getRowLayout = (skills) => {
    const rows = []
    let index = 0
    let rowSize = 3

    while (index < skills.length) {
      rows.push(skills.slice(index, index + rowSize))
      index += rowSize
      rowSize = rowSize === 3 ? 2 : 3
    }
    return rows
  }

  const rows = getRowLayout(group.skills)

  return (
    <motion.div
      layout
      animate={{
        opacity: isDimmed ? 0.25 : 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Category label */}
      <motion.p
        layout
        animate={{
          color: isSelected ? color.text : "#6b6b6b",
          opacity: isDimmed ? 0.3 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "0.75rem",
          fontWeight: "600",
        }}
      >
        {group.category}
      </motion.p>

      {/* Hexagon rows */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          alignItems: "center",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              gap: "4px",
              marginLeft: rowIndex % 2 === 1 ? "47px" : "0px",
            }}
          >
            {row.map((skill, skillIndex) => (
              <Hexagon
                key={skill.name}
                skill={skill}
                color={color}
                isSelected={isSelected || isAllSelected}
                isDimmed={false}
                delay={skillIndex * 0.05}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default HoneycombCluster
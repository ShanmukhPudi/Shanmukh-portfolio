import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TECH_STACK, CATEGORY_COLORS } from "../../constants"
import HoneycombCluster from "../ui/HoneycombCluster"

const TechStack = () => {
  const [selected, setSelected] = useState("All")

  const categories = ["All", ...TECH_STACK.map((g) => g.category)]

  return (
    <section
      id="tech-stack"
      aria-label="Tech stack section"
      style={{ padding: "6rem 0" }}
      className="w-full"
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 3rem",
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3rem" }}
        >
          <span
            style={{ fontSize: "1.1rem" }}
            className="font-mono text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase"
          >
            {">_ tech stack"}
          </span>
          <h2
            style={{ marginTop: "1.5rem" }}
            className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]"
          >
            What I Work With
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "4rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "999px",
                border: "1px solid",
                fontSize: "0.8rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "JetBrains Mono, monospace",
                background:
                  selected === cat
                    ? cat === "All"
                      ? "#008f5a"
                      : CATEGORY_COLORS[cat]?.border
                    : "transparent",
                borderColor:
                  selected === cat
                    ? cat === "All"
                      ? "#008f5a"
                      : CATEGORY_COLORS[cat]?.border
                    : "#2a2a2a",
                color:
                  selected === cat
                    ? "#000000"
                    : "#6b6b6b",
                boxShadow:
                  selected === cat
                    ? cat === "All"
                      ? "0 0 12px rgba(0,143,90,0.4)"
                      : `0 0 12px ${CATEGORY_COLORS[cat]?.glow}`
                    : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Honeycomb Grid */}
        <motion.div
          layout
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: selected === "All" ? "2rem" : "4rem",
            justifyContent: "center",
            alignItems: "flex-start",
            transition: "gap 0.4s ease",
          }}
        >
          <AnimatePresence mode="sync">
            {TECH_STACK.map((group) => {
              const color = CATEGORY_COLORS[group.category] || {
                border: "#00ff9f",
                glow: "rgba(0,255,159,0.3)",
                text: "#00ff9f",
              }
              const isSelected = selected === group.category
              const isAllSelected = selected === "All"

              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isAllSelected || isSelected ? 1 : 0.2,
                    scale: isAllSelected || isSelected ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <HoneycombCluster
                    group={group}
                    color={color}
                    isSelected={isSelected}
                    isAllSelected={isAllSelected}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid",
            alignItems: "center",
          }}
          className="border-[#e4e4e4] dark:border-[#1f1f1f]"
        >
          <span className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b] uppercase tracking-widest">
            Legend:
          </span>
          {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
            <div
              key={cat}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "2px",
                  background: color.border,
                  boxShadow: `0 0 6px ${color.glow}`,
                  display: "inline-block",
                }}
              />
              <span
                style={{ fontSize: "0.75rem" }}
                className="font-mono text-[#777777] dark:text-[#6b6b6b]"
              >
                {cat}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
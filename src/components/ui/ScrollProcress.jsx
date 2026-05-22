import { useScroll, useSpring, motion } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Track */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          right: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "6px",
          height: "16vh",
          borderRadius: "999px",
          background: "rgba(0, 207, 255, 0.08)",
          zIndex: 100,
        }}
      >
        {/* Progress fill */}
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "999px",
            background: "linear-gradient(to bottom, #00cfff, #00ff9f)",
            boxShadow: "0 0 8px #00cfff, 0 0 16px #00cfff55",
            scaleY,
            transformOrigin: "top",
          }}
        />
      </div>
    </>
  )
}

export default ScrollProgress
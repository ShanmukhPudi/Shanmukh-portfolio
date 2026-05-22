import { useEffect, useRef } from "react"

const UBCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnterTarget = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "48px"
        ringRef.current.style.height = "48px"
        ringRef.current.style.borderColor = "#0F9E99"
        ringRef.current.style.background = "rgba(15,158,153,0.08)"
      }
    }

    const onLeaveTarget = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px"
        ringRef.current.style.height = "32px"
        ringRef.current.style.borderColor = "#262424"
        ringRef.current.style.background = "transparent"
      }
    }

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`
      }

      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const targets = document.querySelectorAll("a, button, [data-magnetic]")
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnterTarget)
      t.addEventListener("mouseleave", onLeaveTarget)
    })

    window.addEventListener("mousemove", onMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnterTarget)
        t.removeEventListener("mouseleave", onLeaveTarget)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#262424",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1px solid #262424",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease",
        }}
      />

      <style>{`
        .universe-b * { cursor: none !important; }
      `}</style>
    </>
  )
}

export default UBCursor
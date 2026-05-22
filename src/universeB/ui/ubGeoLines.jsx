// Layer 2 in the Universe B layer stack.
// Thin geometric lines that drift slowly counter to scroll.
// These give the 'structured grid behind everything'.

import { useEffect, useRef } from "react"

const UBGeoLines = () => {
    const ref = useRef(null)

    useEffect(() => {
        let scrollY = 0
        let rafId = null

        const onScroll = () => {
            scrollY = window.scrollY
        }

        const tick = () => {
            if (ref.current) {
                // Counter-scroll at 2% - very subtle parallax
                const offset = scrollY * 0.02
                ref.current.style.transform = `translateY(${offset}px)`
            }
            rafId = requestAnimationFrame(tick)
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        rafId = requestAnimationFrame(tick)

        return () => {
            window.removeEventListener("scroll", onScroll)
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <div 
            aria-hidden="true"
            ref={ref}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
                overflow: "hidden",
                willChange: "transform",
            }}
        >
            <svg 
                width="100%"
                height="100%"
                style={{ position: "absolute", inset: 0 }}
                preserveAlpha="none"
            >
                {/* Vertical rhytm lines - left third */}
                <line x1="8%" y1="0" x2="8%" y2="100%" stroke="#262424" strokeWidth="0.4" strokeOpacity="0.07" />
                <line x1="16%" y1="0" x2="16%" y2="100%" stroke="#262424" strokeWidth="0.4" strokeOpacity="0.05" />

                {/* Vertical rhytm lines - right third */}
                <line x1="84%" y1="0" x2="84%" y2="100%" stroke="#262424" strokeWidth="0.4" strokeOpacity="0.07" />
                <line x1="92%" y1="0" x2="92%" y2="100%" stroke="#262424" strokeWidth="0.4" strokeOpacity="0.05" />

                {/* Single diagonal - top right to mid left - the 'punch of boldness' */}
                <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#0F9E99" strokeWidth="0.6" strokeOpacity="0.09" />

                {/* Horizontal marker - one third down */}
                <line x1="0" y1="33%" x2="12%" y2="33%" stroke="#262424" strokeWidth="0.4" strokeOpacity="0.1" />
                <line x1="88%" y1="66%" x2="100%" y2="66%" stroke="#262424" strokeWidth="0.4" strokeOpacity="0.1" />
            </svg>
        </div>
    )
}


export default UBGeoLines
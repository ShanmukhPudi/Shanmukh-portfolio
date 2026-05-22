import { useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import useCountUp from "../../hooks/useCountUp"

const CountUp = ({ value, suffix = "", duration = 2000 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    // extract numeric part from the value
    const numeric = parseInt(value.replace(/[^0-9]/g, ""))
    const count = useCountUp(numeric, duration, isInView)

    return (
        <span
            ref={ref}
            style={{
                background: "linear-gradient(to right, #00ff9f, #00cfff",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            }}
        >
            {count}{suffix}
        </span>
    )
}

export default CountUp
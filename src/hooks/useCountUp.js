import { useState, useEffect, useRef } from "react"

const useCountUp = (target, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0)
    const frameRef = useRef(null)
    const startTimeRef = useRef(null)

    useEffect(() => {
        if (!startCounting) return

        const animate = (timestamp) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp
            const elapsed = timestamp - startTimeRef.current
            const progress = Math.min(elapsed / duration, 1)

            // ease out subit to slow down as it approaches target
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1 ) {
                frameRef.current = requestAnimationFrame(animate)
            } else {
                setCount(target)
            }
        }

        frameRef.current = requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    }, [target, duration, startCounting])

    return count
}

export default useCountUp
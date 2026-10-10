import { useState, useEffect } from "react"

const useStartupAnimation = () => {
    const[phase, setPhase] = useState("boot")

    // phases : boot -> flicker -> reveal

    useEffect(() => {

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"
        }

        const t1 = setTimeout(() => {
            setPhase("flicker")
        }, 200)

        const t2 = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "instant" })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
            setPhase("reveal")
        }, 600)

        const t3 = setTimeout(() => setPhase("done"), 1400)
        
        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
        }
    }, [])

    return phase
}

export default useStartupAnimation
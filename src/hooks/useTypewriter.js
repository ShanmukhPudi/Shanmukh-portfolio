import { useState, useEffect } from "react"

const useTypewriter = (strings, speed = 80, pause = 2000) => {
    const [displayed, setDisplayed] = useState("")
    const [stringIndex, setStringIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = strings[stringIndex]

        const timeout = setTimeout(() => {
            if(!isDeleting) {
                //forward typing
                setDisplayed(current.substring(0, charIndex + 1))
                setCharIndex(prev => prev + 1)

                //Finished typing - pause then start deleting
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pause)
                }
            } else {
                //Deleting
                setDisplayed(current.substring(0, charIndex - 1))
                setCharIndex(prev => prev - 1)

                //finished deleting - move to next string
                if (charIndex - 1 === 0) {
                    setIsDeleting(false)
                    setStringIndex(prev => (prev + 1) % strings.length)
                }
            }
        }, isDeleting ? speed / 2 : speed)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, stringIndex, strings, speed, pause])

    return displayed
}

export default useTypewriter
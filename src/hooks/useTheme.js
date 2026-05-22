import { useState, useCallback, useLayoutEffect } from 'react'

const applyTheme = (themeValue) => {
    const root = document.documentElement
    root.classList.remove("dark", "universe-b")

    if (themeValue === "dark") {
        root.classList.add("dark")
    } else if (themeValue === "universeB") {
        root.classList.add("universe-b")
    }

    localStorage.setItem('theme', themeValue)
}

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === "dark" || savedTheme === "universeB") return savedTheme
        return "dark"
    })

    // Apply theme synchronously before paint whenever theme changes
    useLayoutEffect(() => {
        applyTheme(theme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === "dark" ? "universeB" : "dark")
    }, [])

    const isDark = theme === "dark"
    const isUniverseB = theme === "universeB"

    return { theme, toggleTheme, isDark, isUniverseB }
}
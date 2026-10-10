import { useState, useCallback, useLayoutEffect } from "react"

// Two independent switches:
//   realm: "ember" (new design) or "classic" (archived Matrix theme)
//   mode:  "light" or "dark" (Ember only; Classic is always dark)

const read = (key) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const write = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    // storage unavailable (private window, blocked site data); theme still works for this visit
  }
}

const initialMode = () => {
  const saved = read("mode")
  if (saved === "light" || saved === "dark") return saved
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export const useAppTheme = () => {
  const [realm, setRealm] = useState(() => (read("realm") === "classic" ? "classic" : "ember"))
  const [mode, setMode] = useState(initialMode)

  // Apply before paint so there is no flash of the wrong theme
  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.realm = realm
    root.dataset.mode = mode
    // Classic uses Tailwind's `dark:` variant, which keys off the .dark class
    root.classList.toggle("dark", realm === "classic")
  }, [realm, mode])

  const toggleRealm = useCallback(() => {
    setRealm((prev) => {
      const next = prev === "ember" ? "classic" : "ember"
      write("realm", next)
      return next
    })
  }, [])

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      write("mode", next)
      return next
    })
  }, [])

  return { realm, mode, toggleRealm, toggleMode }
}

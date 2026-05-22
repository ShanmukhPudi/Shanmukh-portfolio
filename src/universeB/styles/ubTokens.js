// Universe B - Motion & Design Tokens (JS)

import { delay } from "framer-motion"

export const UB_COLORS = {
    bg:          "#EEE5DA",
    bgSurface:   "#E6DDD1",
    fg:          "#262424",
    fgMuted:     "#5A5755",
    fgFaint:     "#9A9694",
    accent:      "#0F9E99",
    accentDark:  "#0B7A76",
    accent2:     "#A0430A",
    border:      "#C8BFB4",
    borderStrong:"#262424",
}

// Framer motion transition presets that mirror the blueprint easing grid.
// Usage: transition={UB_EASE.strong}
export const UB_EASE = {
    // power4.out eq - for hero reveals, major entrances
    strong: {
        type: "tween",
        ease: [0.16, 1, 0.3, 1],
        duration: 1.2,
    },

    // power3.out - card entrances, slide-ins
    standard: {
        type: "tween",
        ease: [0.25, 1, 0.5, 1],
        duration: 0.9,
    },

    // power2.out - body text, subtle fades
    soft: {
        type: "tween",
        ease: [0.45, 0, 0.55, 1],
        duration: 0.65,
    },

    // Micro - hover states, button presses
    micro: {
        type: "tween",
        ease: [0.25, 1, 0.5, 1],
        duration: 0.2,
    },
}

// Mask-Reveal animation variants
// Reveals text/images by animating clip-path from 0% to 100%
// Wrap the text in a div with overflow:hidden, animate the child.

export const MASK_REVEAL = {
    hidden: {y: "100%", opacity: 0 },
    visible: (delay = 0) => ({
        y: "0%",
        opacity: 1,
        transition: { ...UB_EASE.strong, delay },
    }),
}

// Soft fade up - paragraphs and secondary text
export const FADE_UP = {
    hidden: { y: 24, opacity: 0 },
    visible: (delay = 0) => ({
        y: 0,
        opacity: 1,
        transition: { ...UB_EASE.soft, delay },
    }),
}

// Stagger container - apply to parent, children will animate sequentially
export const STAGGER_CONTAINER = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

// Slide-in from left (odd sevice cards)
export const SLIDE_LEFT = {
    hidden: { x: -120, opacity: 0 },
    visible: (delay = 0) => ({
        x: 0,
        opacity: 1,
        transition: { ...UB_EASE.standard, delay },
    }),
}

// Slide-in from right (even service cards)
export const SLIDE_RIGHT = {
    hidden: { x: 120, opacity: 0 },
    visible: (delay = 0) => ({
        x: 0,
        opacity: 1,
        transition: { ...UB_EASE.standard, delay },
    }),
}
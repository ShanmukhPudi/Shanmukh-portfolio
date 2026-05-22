import { motion, AnimatePresence } from "framer-motion"

const BootOverlay = ({ phase }) => {
    return (
        <AnimatePresence>
            {phase === "boot" && (
                <motion.div
                    key="boot"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "#0a0a0a",
                        zIndex: 9999,
                    }}
                />
            )}

            {phase === "flicker" && (
                <motion.div
                    key="flicker"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: [1, 0, 0.8, 0, 1, 0.3, 1, 0],
                    }}
                    transition={{
                        duration: 0.4,
                        times: [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.8, 1],
                        ease: "linear",
                    }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "#0a0a0a",
                        zIndex: 9999,
                    }}
                />
            )}
        </AnimatePresence>
    )
}

export default BootOverlay
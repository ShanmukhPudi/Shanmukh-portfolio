import { motion } from "framer-motion"

const NeonText = ({ children, delay = 0, className, style }) => {
    return (
        <motion.span
            initial={{
                opacity: 0,
                textShadow: "none",
            }}
            animate={{
                opacity: [0, 1, 0.7, 1],
                textShadow: [
                    "none",
                    "0 0 10px #00ff9f, 0 0 20px #00ff9f88",
                    "0 0 5px #00ff9f44",
                    "0 0 10px #00ff9f, 0 0 20px #00ff9f44",
                ],
            }}
            transition={{
                duration: 0.6,
                delay,
                times: [0, 0.3, 0.6, 1],
                ease: "easeOut",
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.span>
    )
}

export default NeonText
import { PERSONAL, TYPED_STRINGS } from "../../constants"
import Button from "../ui/Button"
import useTypewriter from "../../hooks/useTypewriter"
import { motion } from "framer-motion"

// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

const fadeVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 1.2,
        },
    },
}

const Hero = () => {

    const typedText = useTypewriter(TYPED_STRINGS, 80, 2000)
    return (
        <section 
            id="hero"
            aria-label="Hero section"
            className="relative min-h-screen flex flex-col justify-center px-6 max-2-6xl mx-auto"
        >
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
            >
            
            {/* terminal greeting line */}
            <motion.div variants={itemVariants} className="mb-6">
                <span className="font-mono text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                    {">_ hello world"}
                </span>
            </motion.div>

            {/* Name */}
            <motion.h1 
                variants={itemVariants}
                className="text-6xl md:text-8xl font-bold text-[#111111] dark:text-[#e8e8e8] leading-none tracking-tight mb-4"
            >
                {PERSONAL.name}
            </motion.h1>

            {/* animated title placeholder */}
            {/* <h2 className="text-2xl md:text-3xl font-semibold text-[#008f5a] dark:text-[#00ff9f] font-mono mb-6">
                {PERSONAL.title}
            </h2> */}
            <motion.h2 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-semibold text-[#008f5a] dark:text-[#00ff9f] font-mono mb-6 h-10 flex items-center gap-1"
            >
                {typedText}
                <span 
                    aria-hidden="true"
                    className="inline-block w-0.5 h-7 bg-[#008f5a] dark:bg-[#00ff9f] animate-pulse"
                />
            </motion.h2>

            {/* tagline */}
            <motion.p 
                variants={itemVariants} 
                className="text-base md:text-lg text-[#777777] dark:text-[#6b6b6b] max-w-xl leading-relaxed mb-10"
            >
                {PERSONAL.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
                variants={itemVariants} 
                className="flex flex-wrap gap-4 mb-12"
            >
                <Button 
                    href="#projects"
                    variant="primary"
                    aria-label="View my projects"
                >
                    View Projects
                </Button>
                <Button 
                    href="#contact"
                    variant="outline"
                    aria-label="Contact Shanmukh"
                >
                    Contact Me
                </Button>
            </motion.div>

            {/* availability status */}
            {PERSONAL.available && (
                <motion.div 
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    role="status"
                    aria-label="Currently available for work"
                    className="flex items-center gap-2"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9f] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008f5a] dark:bg-[#00ff9f]"></span>
                    </span>
                    <span className="text-sm font-mono text-[#777777] dark:text-[#6b6b6b]">
                        Available for work
                    </span>
                </motion.div>
            )}
        </motion.div>

            {/* scroll info */}
            <motion.div 
                variants={itemVariants} 
                initial="hidden"
                animate="visible"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#777777] dark:text-[#6b6b6b]"
            >
                <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-[#008f5a] dark:from-[#00ff9f] to-transparent"></div>
            </motion.div>
        </section>
    )

}

export default Hero
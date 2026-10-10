import { PERSONAL, TYPED_STRINGS } from "../../../../constants"
import Button from "../ui/Button"
import useTypewriter from "../../hooks/useTypewriter"
import { motion } from "framer-motion"
import profilePhoto from "../../../../assets/profile.jpg"
// import NeonText from "../ui/NeonText"

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
            className="relative min-h-screen flex items-center justify-center w-full px-6 md:px-20 overflow-x-hidden"
            style={{ boxSizing: "border-box" }}
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 py-16 md:py-32 px-0">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col flex-1 max-w-4xl min-h-[300px] py-10"
                >
                
                <motion.div variants={itemVariants} className="mb-4 md:mb-6">
                    <span className="font-mono text-xs md:text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                        {">_ hello world"}
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] dark:text-[#e8e8e8] leading-none tracking-tight mt-2 md:mt-4"
                >
                    {PERSONAL.name}
                </motion.h1>

                {/* animated title placeholder */}
                {/* <h2 className="text-2xl md:text-3xl font-semibold text-[#008f5a] dark:text-[#00ff9f] font-mono mb-6">
                    {PERSONAL.title}
                </h2> */}
                <motion.h2 
                    variants={itemVariants} 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#008f5a] dark:text-[#00ff9f] font-mono mb-4 md:mb-6 h-8 md:h-10 flex items-center gap-1"
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
                    className="text-base sm:text-lg md:text-xl text-[#777777] dark:text-[#6b6b6b] max-w-2xl leading-relaxed mt-2 md:mt-4"
                >
                    {PERSONAL.tagline}
                </motion.p>

                {/* CTA buttons */}
                <motion.div 
                    variants={itemVariants} 
                    className="flex flex-col sm:flex-row flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mb-6 md:mb-8 w-full sm:w-auto"
                    style={{ marginTop: '1.5rem' }}
                >
                    <Button 
                        href="#projects"
                        variant="outline"
                        aria-label="View my projects"
                        style={{ padding: "clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)", fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                    >
                        View Projects ↗
                    </Button>
                    <Button 
                        href="#contact"
                        variant="outline"
                        aria-label="Contact Shanmukh"
                        style={{ padding: "clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)", fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
                    >
                        Contact Me ↗
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
                        className="flex items-center gap-3"
                        style={{ marginTop: '1.5rem' }}
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9f] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#008f5a] dark:bg-[#00ff9f]"></span>
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-[#777777] dark:text-[#6b6b6b]">
                            Available for work
                        </span>
                    </motion.div>
                )}
            </motion.div>


            {/* profile photo @ right column */}
            <motion.div 
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                className="relative w-64 sm:w-72 md:w-80 lg:w-[420px] flex-shrink-0"
            >
                {/* glow effect behind photo */}
                <div 
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-[#008f5a] dark:bg-[#00ff9f] opacity-20 blur-2xl scale-110"
                />

                {/* photo deets here */}
                <img 
                    src={profilePhoto}
                    alt="Shanmukh -- Full-Stack Developer and Automation Engineer"
                    className="relative w-full aspect-[2/3] object-cover object-[center_30%] rounded-2xl border border-[#e4e4e4] dark:border-[#1f1f1f]"
                />
            </motion.div>
        </div>

            {/* scroll info */}
            <motion.div 
                variants={itemVariants} 
                initial="hidden"
                animate="visible"
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#777777] dark:text-[#6b6b6b]"
            >
                <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
                <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#008f5a] dark:from-[#00ff9f] to-transparent"></div>
            </motion.div>
        </section>
    )

}

export default Hero
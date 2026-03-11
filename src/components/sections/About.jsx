import { motion } from "framer-motion"
import { ABOUT, PERSONAL } from "../../constants"

const containerVariants = {
    hidded: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 0,
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

const About = () => {
    return (
        <section 
        id="about"
        aria-label="About section"
        className="py-32 px-12 md:px-20 max-w-6xl mx-auto"
    >
        {/* section header */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
        >
            <motion.span 
                variants={itemVariants}
                className="font-mono text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase"
            >
                {">_ about me"}
            </motion.span>
            <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-[#111111] drak:text-[##111111] mt-3"
            >
                Who I am
            </motion.h2>
        </motion.div>

        {/* two column layout */}
        <div className="flex flex-col md:flex-row gap-16">
            {/* left - bio & resume */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount:0.2 }}
                className="flex-1 flex flex-col gap-8"
            >
                <motion.p 
                    variants={itemVariants}
                    className="text-lg text-[#555555] dark:text-[#a0a0a0] leading-relaxed"
                >
                    {ABOUT.bio}
                </motion.p>

                {/* resume download button */}
                <motion.div variants={itemVariants}>
                    <a
                        href={PERSONAL.resume}
                        download
                        aria-label="Download Shanmukh's resume"
                        className="inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-medium border border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] rounded hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
                    >
                        <span aria-hidden="true">↓</span>
                        Download CV
                    </a>
                    
                </motion.div>
            </motion.div>

            {/* right - strength cards */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
                {ABOUT.strengths.map((strength) => (
                    <motion.div 
                        key={strength.id}
                        variants={itemVariants}
                        className="p-6 rounded-xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group"
                    >
                        <span 
                            aria-hidden="true"
                            className="text-3xl mb-4 block"
                        >
                            {strength.icon}
                        </span>
                        <h3 className="text-base font-semibold text-[#111111] dark:text-[#e8e8e8] mb-2 group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                            {strength.title}
                        </h3>
                        <p className="text-sm text-[#777777] dark:text-[#6b6b6b] leading-relaxed">
                            {strength.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
    )
}

export default About
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

const About = () => {
    return (
        <section 
        id="about"
        aria-label="About section"
        style={{ 
            padding: "clamp(60px, 10vw, 96px) clamp(16px, 4vw, 48px)",
            overflowX: "hidden",
            boxSizing: "border-box",
            maxWidth: "100vw",
        }}
        className="relative w-full"
    >
        <div></div>
        {/* <div className="max-w-7xl mx-auto w-full px-6 md:px-20"></div> */}

        {/* section header */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 md:mb-20"
        >
            <motion.span 
                variants={itemVariants}
                className="font-mono text-xs sm:text-sm md:text-lg text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase"
            >
                {">_ about me"}
            </motion.span>
            <motion.h2 
                variants={itemVariants}
                style={{ marginTop: "1rem" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]"
            >
                Who I am
            </motion.h2>
        </motion.div>

        {/* two column layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-20 w-full" style={{ alignItems: "flex-start", boxSizing: "border-box" }} >

            {/* left - bio & resume */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount:0.2 }}
                className="flex-1 flex flex-col gap-10 min-w-0 w-full md:w-auto"
                style={{ boxSizing: "border-box" }}
            >
                <motion.div 
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-lg text-[#555555] dark:text-[#a0a0a0] leading-relaxed w-full break-words"
                    style={{ paddingTop: "1rem", boxSizing: "border-box" }}
                >
                    {ABOUT.bio.map(( paragraph, index) => (
                        <p 
                            key={index}
                            className="text-base sm:text-lg text-[#555555] dark:text-[#a0a0a0] leading-relaxed mb-4 break-words overflow-wrap-break-word"
                            style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                {/* resume download button */}
                <motion.div variants={itemVariants}>
                    <a
                        href={PERSONAL.resume}
                        download
                        aria-label="Download Shanmukh's resume"
                        style={{ padding: "clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)", fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
                        className="inline-flex items-center gap-3 font-mono font-medium border border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] rounded-lg hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
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
                className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full md:w-auto min-w-0"
                style={{ alignContent: "start", alignSelf: "start", boxSizing: "border-box" }}            >
                {ABOUT.strengths.map((strength) => (
                    <motion.div 
                        key={strength.id}
                        variants={itemVariants}
                        whileHover={{
                            y: -8,
                            boxShadow: "0 20px 40px rgba(0, 143, 90, 0.15)"
                        }}
                        transition= {{ duration: 0.3 }}
                        style={{
                            padding: "clamp(1.25rem, 2.5vw, 2rem)",
                            borderRadius: "1rem",
                            border: "1px solid",
                            boxSizing: "border-box",
                            wordBreak: "break-word",
                            overflowWrap: "break-word",
                        }}
                        className="flex flex-col gap-4 border-[#e4e4e4] dark:border-[#1f1f1f] bg-[#111111] dark:bg-[#111111] cursor-default group min-w-0"
                    >
                        <span 
                            aria-hidden="true"
                            className="text-2xl sm:text-3xl md:text-4xl"
                        >
                            {strength.icon}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold text-[#e8e8e8] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200 break-words min-w-0 w-full">
                            {strength.title}
                        </h3>
                        <p className="text-sm text-[#777777] dark:text-[#6b6b6b] leading-relaxed break-words min-w-0 w-full overflow-wrap-break-word" style={{ overflowWrap: "break-word", wordBreak: "break-word" }}>
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
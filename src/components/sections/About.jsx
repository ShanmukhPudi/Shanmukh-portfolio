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
        style={{ padding: "6rem 0"}}
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
            className="mb-20"
        >
            <motion.span 
                variants={itemVariants}
                className="font-mono text-xl text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase"
            >
                {">_ about me"}
            </motion.span>
            <motion.h2 
                variants={itemVariants}
                style={{ marginTop: "1.5rem" }}
                className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]"
            >
                Who I am
            </motion.h2>
        </motion.div>

        {/* two column layout */}
        <div className="flex flex-col md:flex-row gap-20" style={{ alignItems: "flex-start"}}>

            {/* left - bio & resume */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount:0.2 }}
                className="flex-1 flex flex-col gap-10"
            >
                <motion.div 
                    variants={itemVariants}
                    className="text-lg text-[#555555] dark:text-[#a0a0a0] leading-relaxed"
                    style={{ paddingTop: "1rem" }}
                >
                    {ABOUT.bio.map(( paragraph, index) => (
                        <p 
                            key={index}
                            className="text-lg text-[#555555] dark:text-[#a0a0a0] leading-relaxed"
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
                        style={{ padding: "1rem 2.5rem", fontSize: "1rem" }}
                        className="inline-flex items-center gap-3 font-mono font-medium border border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00f9f] rounded-lg hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
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
                className="flex-1 grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: "1.5rem", alignContent: "start", alignSelf: "start" }}            >
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
                            padding: "2rem",
                            borderRadius: "1rem",
                            border: "1px solid",
                        }}
                        className="flex flex-col gap-4 border-[#e4e4e4] dark:border-[#1f1f1f] bg-[#111111] dark:bg-[#111111] cursor-default group"
                    >
                        <span 
                            aria-hidden="true"
                            className="text-4xl"
                        >
                            {strength.icon}
                        </span>
                        <h3 className="text-base font-semibold text-[#e8e8e8] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
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
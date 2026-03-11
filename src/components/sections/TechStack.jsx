import { motion } from "framer-motion"
import { TECH_STACK } from "../../constants"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const levelColors = {
    Proficient: "text-[#008f5a] dark:text-[#00ff9f] border-[#008f5a] dark:border-[#00ff9f]",
    Comfortable: "text-[#0077aa] dark:text-[#00cfff] border-[#0077aa] dark:border-[#00cfff]",
    Learning: "text-[#777777] dark:text-[#6b6b6b] border-[#777777] dark-border-[#6b6b6b]",
}

const TechStack = () => {
    return (
        <section 
            id="tech-stack"
            aria-label="Tech stack section"
            className="py-32 px-12 md:px-20 max-w-6xl mx-auto w-full"
        >
            {/* section header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="font-mono text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                    {">_ tech stack"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8] mt-3">
                    What I Work With
                </h2>
            </motion.div>

            {/* categories */}
            <div className="flex flex-col gap-16">
                {TECH_STACK.map((group) => (
                    <div key={group.category}>

                        {/*category label*/}
                        <motion.h3 
                            initial={{ opacity: 0, x: -20}}
                            whileInView={{ opacity:1, x:0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="font-mono text-sm text-[#777777] dark:text-[#6b6b6b] uppercase tracking-widest mb-8 pb-3 border-b border-[#e4e4e4] dark:border-[#1f1f1f]"
                        >
                            {group.category}
                        </motion.h3>

                        {/*skill cards*/}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                        >
                            {group.skills.map((skill) => (
                                <motion.div 
                                    key={skill.name}
                                    variants={itemVariants}
                                    className="flex flex-col items-center gap-4 p-6 rounded-xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group cursor-default"
                                >
                                    {/*icon*/}
                                    <img 
                                        src={skill.icon}
                                        alt={`${skill.name} logo`}
                                        className={`w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 ${skill.name === "GitHub" || skill.name === "Framer Motion" ? "dark:invert" : ""}
                                        `}
                                    />

                                    {/*name*/}
                                    <span className="text-sm font-medium text-[#111111] dark:text-[#e8e8e8] text-center">
                                        {skill.name}
                                    </span>

                                    {/*level badge*/}
                                    <span 
                                        className={`text-xs font-mono px-2 py-0.5 rounded-full border ${levelColors[skill.level]}`}
                                    >
                                        {skill.level}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            {/*legend*/}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-[#e4e4e4] dark:border-[#1f1f1f]"
            >
                <span className="text-xs font-mono text-[#777777] dark:text-[#6b6b6b] ippercase tracking-widest">
                    Legend:
                </span>
                {Object.entries(levelColors).map(([level, colors]) => (
                    <span 
                        key={level}
                        className={`text-xs font-mono px-2 py-0.5 rounded-full border ${colors}`}
                    >
                        {level}
                    </span>
                ))}
            </motion.div>
        </section>
    )
}

export default TechStack
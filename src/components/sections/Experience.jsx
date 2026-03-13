import { motion } from "framer-motion"
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS } from "../../constants"

const containerVariants ={
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants ={
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const Experience = () => {
    return (
        <section 
            id="experience"
            aria-label="Experience section"
            className="py-32 px-12 md:px-20 max-w-6xl mx-auto w-full"
        >
            {/*section header*/}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="font-mono text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                    {">_ experience"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] dark:text-[#e8e8e8 mt-3]">
                    Where I Have Worked
                </h2>
            </motion.div>

            {/*timeline*/}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1}}
                className="relative flex flex-col gap-0"
            >
                {/*vertical line*/}
                <div 
                    aria-label="true"
                    className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#008f5a] dark:from-[#00ff9f] via-[#e4e4e4] dark:via-[#1f1f1f] to transparent"
                />

                {EXPERIENCE.map((job) => (
                    <motion.div 
                        key={job.id}
                        variants={itemVariants}
                        className="relative pl-10 pb-16 last:pb-0"
                    >
                        {/*timeline dot*/}
                        <div 
                            aria-hidden="true"
                            className="absolute left-0 top-2 -translate-x-1/2"
                        >
                            <span className="relative flex h-3 w-3">
                                {job.current && (
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9f] opacity-75" />
                                )}
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${
                                    job.current
                                        ? "bg-[#008f5a] dark:bg-[#00ff9f]"
                                        : "bg-[#e4e4e4] dark:bg-[#1f1f1f] border border-[#008f5a] dark:border-[#00ff9f]" 
                                }`}/>
                            </span>
                        </div>

                        {/*content*/}
                        <div className="p-8 rounded-2xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group">
                            {/*top row*/}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                <div>
                                    <h3 className="text-xl font-bold text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                                        {job.role}
                                    </h3>
                                    <p className="text-base text-[#555555] dark:text-[#a0a0a0] font-medium">
                                        {job.company}
                                    </p>
                                </div>

                                {/*duration & badge*/}
                                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                                    <span className="font-mono text-sm text-[#777777] dark:text-[$6b6b6b]">
                                        {job.duration}
                                    </span>
                                    {job.current && (
                                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black">
                                            Current
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/*location*/}
                            <p className="text-sm font-mono text-[#777777] dark:text-[#6b6b6b] mb-4">
                                ⌖ {job.location}
                            </p>

                            {/*summary*/}
                            <p className="text-[#555555] dark:text-[#a0a0a0] leading-relaxed">
                                {job.summary}
                            </p>

                        </div>
                    </motion.div>
                ))}

                {/*education*/}
                <motion.div 
                    variants={itemVariants}
                    className="relative pl-10"
                >
                    {/*timeline dot*/}
                    <div 
                        aria-hidden="true"
                        className="absolute left-0 top-2 -translate-x-1/2"
                    >
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e4e4e4] dark:bg-[#1f1f1f] border border-[#008f5a] dark:border-[#00ff9f]" />
                    </div>

                    {/*content*/}
                    <div className="p-8 rounded-2xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300">
                        <p className="font-mono text-sm text-[#777777] dark:text-[#6b6b6b] mb-2">
                            Education
                        </p>
                        <p className="text-[#111111] dark:text-[#e8e8e8] font-medium">
                            {EDUCATION}
                        </p>
                    </div>
                </motion.div>

            </motion.div>

            {/*achievements strip*/}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[#e4e4e4] dark:border-[#1f1f1f]"
            >
                {ACHIEVEMENTS.map((item) => (
                    <div 
                        key={item.label}
                        className="flex flex-col items-center text-center gap-2"
                    >
                        <span className="text-3xl md:text-4xl font-bold font-mono text-[#008f5a] dark:text-[#00ff9f]">
                            {item.value}
                        </span>
                        <span className="text-sm text-[#777777] darkLtext-[#6b6b6b] leading-snug">
                            {item.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default Experience
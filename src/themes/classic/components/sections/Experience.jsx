import { motion } from "framer-motion"
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS } from "../../../../constants"
import CountUp from "../ui/CountUp"

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
            style={{ padding: "clamp(60px, 10vw, 96px) 0" }}
            className="w-full overflow-x-hidden"
        >
            <div style={{ width: "100%", maxWidth: "1500px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 48px)", boxSizing: "border-box" }}></div>
            {/*section header*/}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: "3rem" }}
            >
                <span className="font-mono text-xs sm:text-sm md:text-base text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                    {">_ experience"}
                </span>
                <h2 
                    style={{ marginTop: "1rem" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]">
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
                    style={{
                        position: "absolute",
                        left: "0",
                        top: "0.5rem",
                        bottom: "1rem",
                        width: "1px",
                        background: "linear-gradient(to bottom, #00ff9f, #008f5a, #1f1f1f)",
                    }}
                />

                {EXPERIENCE.map((job) => (
                    <motion.div 
                        key={job.id}
                        variants={itemVariants}
                    style={{ position: "relative", paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)" }}
                    className="relative pl-8 md:pl-10 pb-12 md:pb-16 last:pb-0"
                    >
                        {/*timeline dot*/}
                        <div 
                            aria-hidden="true"
                            style={{
                                position: "absolute",
                                left: "0",
                                top: "0.4rem",
                                transform: "translateX(-50%)",
                            }}
                            // className="absolute left-0 top-2 -translate-x-1/2"
                        >
                            {/* className="relative flex h-3 w-3" */}
                            <span style={{ position: "relative", display: "flex", width: "0.75rem", height: "0.75rem" }}>
                                {job.current && (
                                    <span 
                                    style={{ position: "absolute", inset: 0, borderRadius: "999px", background: "#00ff9f", opacity: 0.75}}
                                    //  absolute inline-flex h-full w-full rounded-full bg-[#00ff9f] opacity-75
                                    className="animate-ping" />
                                )}
                                <span style={{
                                    position: "relative",
                                    display: "inline-flex",
                                    borderRadius: "999px",
                                    width: "0.75rem",
                                    height: "0.75rem",
                                    background: job.current ? "#008f5a" : "transparent",
                                    border: "1px solid #008f5a",
                                }}
                                className={job.current? "dark:bg-[#00ff9f]" : ""}
                                // {`relative inline-flex rounded-full h-3 w-3 ${
                                //     job.current
                                //         ? "bg-[#008f5a] dark:bg-[#00ff9f]"
                                //         : "bg-[#e4e4e4] dark:bg-[#1f1f1f] border border-[#008f5a] dark:border-[#00ff9f]"}`}
                                
                                />
                            </span>
                        </div>

                        {/*content*/}
                        <div style={{ paddingLeft: "1rem" }}>
                        {/* <div className="p-8 rounded-2xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group"> */}
                            {/*top row*/}
                            <div 
                                style={{ marginBottom: "0.5rem" }}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <h3 
                                        style={{ marginBottom: "0.25rem" }}
                                        className="text-lg sm:text-xl font-bold text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                                        {job.role}
                                    </h3>
                                    <p className="text-sm md:text-base text-[#555555] dark:text-[#a0a0a0] font-medium">
                                        {job.company}
                                    </p>
                                </div>

                                {/*duration & badge*/}
                                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                                    <span className="font-mono text-xs sm:text-sm text-[#777777] dark:text-[#6b6b6b]">
                                        {job.duration}
                                    </span>
                                    {job.current && (
                                        <span className="text-xs font-mono px-2 py-0.5 rounded-full text-black dark:text-[#00ff9f]">
                                            ⏺ Current
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/*location*/}
                            <p 
                                style={{ marginBottom: "0.75rem" }}
                                className="text-xs sm:text-sm font-mono text-[#777777] dark:text-[#00ff9f] mb-4">
                                ⌘ {job.location}
                            </p>

                            {/*summary*/}
                            <p className="text-sm md:text-base text-[#555555] dark:text-[#a0a0a0] leading-relaxed">
                                {job.summary}
                            </p>

                        </div>
                    </motion.div>
                ))}

                {/*education*/}
                <motion.div 
                    variants={itemVariants}
                    style={{ position: "relative", paddingLeft: "clamp(1.5rem, 4vw, 2.5rem)" }}
                    className="relative pl-8 md:pl-10"
                >
                    {/*timeline dot*/}
                    <div 
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            left: "0",
                            top: "0.4rem",
                            transform: "translateX(-50%)",
                            display: "inline-flex",
                            borderRadius: "999px",
                            width: "0.75rem",
                            height: "0.75rem",
                            background: "transparent",
                            border: "2px solid #008f5a",
                        }}/>

                    {/*content*/}
                    <div style={{ paddingLeft: "1rem" }}>
                        <p 
                            style={{ marginBottom: "0.375rem" }}
                            className="font-mono text-xs sm:text-sm text-[#777777] dark:text-[#6b6b6b] uppercase tracking-widest"
                        >
                            Education
                        </p>
                        <p className="text-base md:text-lg text-[#111111] dark:text-[#e8e8e8] font-medium">
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
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "clamp(1rem, 3vw, 2rem)",
                    marginTop: "2rem",
                    paddingTop: "clamp(2rem, 3vw, 3rem)",
                    borderTop: "1px solid",
                }}
                className="border-[#e4e4e4] dark:border-[#1f1f1f]"
            >
                {ACHIEVEMENTS.map((item) => (
                    <div 
                        key={item.label}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <span 
                            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: "700"}}
                            className="font-mono text-[#111111] dark:text-[#e8e8e8]"
                        >
                            <CountUp
                                value={item.value}
                                suffix={item.value.replace(/[0-9]/g, "")}
                                duration={2000}/>
                        </span>
                        <span 
                            style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)", lineHeight: "1.4"}}
                            className="text-xs md:text-sm text-[#777777] dark:text-[#6b6b6b]"
                        >
                            {item.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default Experience
import { motion } from "framer-motion"
import { PERSONAL } from "../../constants"

const Footer = () => {
    const year = new Date().getFullYear()

    return(
        <footer
            role="contentinfo"
            className="w-full border-t border-[#e4e4e4] dark:border-[#1f1f1f] py-10 px-12 md:px-20"
        >
            <div className="ma-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/*left logo*/}
                <motion.a 
                    href="#hero"
                    initial={{ opacity:0 }}
                    whileInView={{ opacity:1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    aria-label="Shanmukh - Back to top"
                    className="font-mono text-[#008f5a] dark:text-[#00ff9f] text-base font-bold hover:opacity-80 transition-opacity"
                >
                    {">_ shanmukh"}
                </motion.a>

                {/*center copyright*/}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b] text-center"
                >
                    © {year} P V Shanmukh Krishna. Built with React + Tailwind.
                </motion.p>

                {/*right links*/}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-6"
                >

                    <a 
                        href={PERSONAL.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b] hover:text-[#008f5a] dark:hover:text-[#00ff9f] transition-colors duration-200"
                    >
                        GitHub
                    </a>

                    <a 
                        href={PERSONAL.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin profile"
                        className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b] hover:text-[#008f5a] dark:hover:text-[#00ff9f] transition-colors duration-200"
                    >
                        Linkedin
                    </a>

                    <a 
                        href={`mailto:${PERSONAL.email}`}
                        aria-label="Send email"
                        className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b] hover:text-[#008f5a] dark:hover:text-[#00ff9f] transition-colors duration-200"
                    >
                        Email
                    </a>
                </motion.div>

            </div>
        </footer>
    )
}

export default Footer
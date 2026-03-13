import { motion } from "framer-motion";
import { PROJECTS } from "../../constants";
import Tag from "../ui/Tag";

const containerVariants ={
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
}

const statusStyles = {
    live: "text-[#008f5a] dark:text-[#00ff9f] border-[#008f5a] dark:border-[#00ff9f]",
    "In-development": "text-[#0077aa] dark:text-[#00ccff] border-[#0077aa] dark:border-[#00ccff]",
}

const statusLabels ={
    live: "● Live",
    "In-development": "⚙ In Development",
}

const FeaturedProject = ({ project }) => {
    return (
        <motion.div 
            variants={itemVariants}
            className="relative rounded-2xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] overflow-hidden hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group"
        >
            
            {/*gradient top border*/}
            {/* <div 
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#008f5a] via-[#00cfff] to-[#008f5a] dark:from-[#00ff9f] dark:via-[#00cfff] dark:to-[#00ff9f]"></div> */}


            {/*featured badge*/}
            <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black">
                    ⭐ Featured
                </span>
            </div>

            {/* img placeholder */}
            <div className="w-full h-64 bg-[#f4f4f4] dark-bg-[#0d0d0d] flex items-center justify-center border-b border-[#e4e4e4] dark:border-[#1f1f1f]">
                {project.image ? (
                    <img 
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="font-mono text-sm text-[#777777] dark:text-[#6b6b6b]">
                        {">_ screenshot coming soon"}
                    </span>
                )}
            </div>

            {/* content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-[#111111] dark-text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transtition-colors duration-200">
                        {project.title}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full border shrink-0 ${statusStyles[project.status]}`}>
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p className="text-sm text-[#555555] dark:text-[#a0a0a0] leading-relaxed mb-4 flex-1">
                    {project.description}
                </p>

                {/*tags*/}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>

                {/*buttons*/}
                <div className="flex gap-3">
                    {project.demo && (

                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            className="px-4 py-2 font-mono text-xs rounded bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 trnasition-all duration-200"
                        >
                            Live Demo ↗
                        </a>
                    )}
                    {project.github && (

                        <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View GitHub repository of ${project.title}`}
                            className="px-4 py-2 font-mono text-xs rounded border border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[008f5a#] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
                        >
                            GitHub ↗
                        </a>
                    )}
                    {!project.demo && !project.github && (
                        <span className="px-4 py-2 font-mono text-xs rounded border border-[#e4e4e4] dark:border-[#1f1f1f] text-[#777777] dark:text-[#6b6b6b]">
                            Coming Soon
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <motion.div 
            variants={itemVariants}
            className="relative rounded-2xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[@111111] overflow-hidden hover:boeder-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group flex flex-col"
        >
            {/*image placeholder*/}
            <div className="w-full h-40 bg-[#f4f4f4] dark:bg-[#0d0d0d] flex items-center justify-center border-b border-[#e4e4e4] dark:border-[#1f1f1f]">
                {project.image ? (
                    <img 
                        arc={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b]">
                        {">_ In development"}
                    </span>
                )}
            </div>

            {/*content*/}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                        {project.title}
                    </h3>
                    <span className={`text-xs font-mono px-2 py-1 rounded-full border shrink-0 ${statusStyles[project.status]}`}>
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p className="text-sm text-[#555555] dark:text-[#0a0a0a] leading-relaxed mb-4 flex-1">
                    {project.description}
                </p>

                {/*tags*/}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>

                {/*buttons*/}
                <div className="flex gap-3">
                    {project.demo && (

                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            className="px-4 py-2 font-mono text-xs rounded bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 transition-all duration-200"
                        >
                            Live Demo ↗
                        </a>
                    )}
                    {project.github && (

                        <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View GitHub repository of ${project.title}`}
                            className="px-4 py-2 font-mono text-xs rounded border border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
                        >
                            GitHub ↗
                        </a>
                    )}
                    {!project.demo && !project.github && (
                        <span className="px-4 py-2 font-mono text-xs rounded border border-[#e4e4e4] dark:border-[#1f1f1f] text-[#777777] dark:text-[#6b6b6b]">
                            Coming Soon
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    const featured = PROJECTS.find((p) => p.featured)
    const rest = PROJECTS.filter((p) => !p.featured)

    return (
        <section 
            id="projects"
            aria-label="Projects section"
            className="py-32 px-12 md:px-20 max-w-6xl mx-auto w-full"
        >
            {/* section header */}
            <motion.div 
                initial={{ opacity:0, y: 30 }}
                whileInView={{ opacity:1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="font-mono text-sm text-[#008f5a] darkLtext-[#00ff9f] tracking-widest uppercase">
                    {"_ projects"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8] mt-3">
                    What I have Built
                </h2>
            </motion.div>

            {/*projects grid*/}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1}}
                className="flex flex-col gap-8"
            >
                {/* featured project */}
                {featured && <FeaturedProject project={featured} />}

                {/*remaining projects*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {rest.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
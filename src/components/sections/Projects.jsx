import { motion } from "framer-motion";
import { PROJECTS, TECH_STACK } from "../../constants";
import Tag from "../ui/Tag";

const iconMap = TECH_STACK.reduce((acc, group) => {
    group.skills.forEach((skill) => {
        acc[skill.name] = skill.icon
    })
    return acc
}, {})

const projectOnlyIcons = {
  "JWT": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "WhatsApp API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "REST API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
}

const fullIconMap = { ...iconMap, ...projectOnlyIcons }

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
    live: "text-[#008f5a] dark:text-[#00ff9f]",
    "In-development": "text-[#0077aa] dark:text-[#00ccff]",
}

const statusLabels ={
    live: "● Live",
    "In-development": "⚙ In Development",
}

const FeaturedProject = ({ project }) => {
    return (
        <motion.div 
            variants={itemVariants}
            whileHover={{
                y: -6,
                boxShadow: "0 24px 48px rgba(0, 143, 90, 0.12)",
            }}
            transition={{ duration: 0.3 }}
            style={{
                borderRadius: "1.25rem",
                border: "1px solid",
                overflow: "hidden",
                position: "relative",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group"
        >
            
            {/*gradient top border*/}
            {/* <div 
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#008f5a] via-[#00cfff] to-[#008f5a] dark:from-[#00ff9f] dark:via-[#00cfff] dark:to-[#00ff9f]"></div> */}


            {/*featured badge*/}
            {/* <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black">
                    ⭐ Featured
                </span>
            </div> */}

            <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 10 }}>
                <span 
                    style={{ padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.7rem" }}
                    className="font-mono bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black"
                >
                    ✨ Featured
                </span>
            </div>

            {/* img placeholder */}
            <div 
            style={{ height: "260px" }}
            className="w-full bg-[#f4f4f4] dark-bg-[#0d0d0d] flex items-center justify-center border-b border-[#e4e4e4] dark:border-[#1f1f1f]">
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
            <div style={{ padding: "2.5rem" }}>
                <div 
                    style={{ marginBottom: "1rem" }}
                    className="flex items-start justify-between gap-4"
                >
                    <h3 
                        style={{ fontSize: "1.5rem", fontWeight: "700" }}
                        className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200"
                    >
                        {project.title}
                    </h3>
                    <span 
                        style={{ fontSize: "0.75rem", fontWeight: "500", whiteSpace: "nowrap" }}
                        className={`font-mono ${statusStyles[project.status]}`}
                    >
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p 
                    style={{ marginBottom: "1.5rem", lineHeight: "1.7"}}
                    className="text-[#555555] dark:text-[#a0a0a0]"
                >
                    {project.description}
                </p>

                {/*tags*/}
                <div 
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2rem" }}
                >
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} iconMap={fullIconMap} />
                    ))}
                </div>

                {/*Buttons*/}
                <div style={{ display: "flex", gap: "1rem" }}>
                    {project.demo && (

                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            style={{ padding: "0.75rem 2rem", fontSize: "0.875", borderRadius: "0.5rem" }}
                            className="font-mono bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 transition-all duration-200"
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
                            style={{ padding: "0.75rem 2rem", fontSize: "0.875rem", borderRadius: "0.5rem", border: "1px solid"}}
                            className="font-mono border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
                        >
                            GitHub ↗
                        </a>
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
            whileHover={{
                y: -6,
                boxShadow: "0 24px 48px rgba(0,143, 90, 0.12)",
            }}
            transition={{ duration: 0.3 }}
            style={{
                borderRadius: "1.25rem",
                border: "1px solid",
                overflow: "hidden",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group flex flex-col"
        >
            {/*image placeholder*/}
            <div 
                style={{ height: "160px" }}
                className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d] flex items-center justify-center border-b border-[#e4e4e4] dark:border-[#1f1f1f]"
            >
                {project.image ? (
                    <img 
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="font-mono text-xs text-[#777777] dark:text-[#6b6b6b]">
                        {">_ In development"}
                    </span>
                )}
            </div>

            {/* Content */}
            <div style={{ padding: "2rem" }} className="flex flex-col flex-1">
                <div
                    style={{ marginBottom: "0.75rem" }}
                    className="flex items-start justify-between gap-4"
                >
                    <h3
                        style={{ fontSize: "1.125rem", fontWeight: "700" }}
                        className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200"
                    >
                        {project.title}
                    </h3>
                    <span
                        style={{ fontSize: "0.75rem", fontWeight: "500", whiteSpace: "nowrap" }}
                        className={`font-mono ${statusStyles[project.status]}`}
                    >
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p
                    style={{ fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.25rem" }}
                    className="text-[#555555] dark:text-[#a0a0a0] flex-1"
                >
                    {project.description}
                </p>

                {/* Tags */}
                <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}
                >
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} iconMap={fullIconMap}/>
                    ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    {project.demo && (

                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        style={{ padding: "0.625rem 1.5rem", fontSize: "0.75rem", borderRadius: "0.5rem" }}
                        className="font-mono bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 transition-all duration-200"
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
                        style={{ padding: "0.625rem 1.5rem", fontSize: "0.75rem", borderRadius: "0.5rem", border: "1px solid" }}
                        className="font-mono border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200"
                        >
                        GitHub ↗
                        </a>
                    )}
                    {!project.demo && !project.github && (
                        <span
                        style={{ padding: "0.625rem 1.5rem", fontSize: "0.75rem", borderRadius: "0.5rem", border: "1px solid" }}
                        className="font-mono border-[#e4e4e4] dark:border-[#1f1f1f] text-[#777777] dark:text-[#6b6b6b]"
                        >
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
      style={{ padding: "6rem 0" }}
      className="w-full"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "4rem" }}
      >
        <span
          style={{ fontSize: "1.1rem" }}
          className="font-mono text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase"
        >
          {">_ projects"}
        </span>
        <h2
          style={{ marginTop: "1.5rem" }}
          className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]"
        >
          What I Have Built
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        {featured && <FeaturedProject project={featured} />}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
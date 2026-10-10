import { motion } from "framer-motion";
import { PROJECTS, TECH_STACK } from "../../../../constants";
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
                boxSizing: "border-box",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group w-full min-w-0"
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
              style={{ aspectRatio: "16/7", position: "relative" }}
              className="w-full bg-[#f4f4f4] dark-bg-[#0d0d0d] flex items-center justify-center border-b border-[#e4e4e4] dark:border-[#1f1f1f]">
                {project.image ? (
                    <img 
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="font-mono text-xs sm:text-sm text-[#777777] dark:text-[#6b6b6b]">
                        {">_ screenshot coming soon"}
                    </span>
                )}
            </div>

            {/* content */}
            <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", boxSizing: "border-box" }}>
                <div 
                    style={{ marginBottom: "clamp(0.75rem, 2vw, 1rem)" }}
                    className="flex flex-col gap-2 w-full min-w-0"
                >
                    <h3 
                        style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: "700", lineHeight: "1.3" }}
                        className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200 w-full min-w-0"
                    >
                        {project.title}
                    </h3>
                    <span 
                        style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", fontWeight: "500", flexShrink: 0 }}
                        className={`font-mono ${statusStyles[project.status]}`}
                    >
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p 
                    style={{ marginBottom: "clamp(1rem, 2vw, 1.5rem)", lineHeight: "1.7" }}
                    className="text-[#555555] dark:text-[#a0a0a0] w-full"
                >
                    {project.description}
                </p>

                {/*tags*/}
                <div 
                    style={{ display: "flex", flexWrap: "wrap", gap: "clamp(0.4rem, 1vw, 0.625rem)", marginBottom: "2rem" }}
                >
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} iconMap={fullIconMap} />
                    ))}
                </div>

                {/*Buttons*/}
                <div className="w-full project-buttons" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {project.demo && (

                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                            style={{ padding: "clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 2rem)", fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", borderRadius: "0.5rem" }}
                            className="font-mono bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 transition-all duration-200 flex-shrink-0 text-center"
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
                            style={{ padding: "clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.25rem, 2.5vw, 2rem)", fontSize: "clamp(0.7rem, 1.5vw, 0.875rem)", borderRadius: "0.5rem", border: "1px solid" }}
                            className="font-mono border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200 flex-shrink-0 text-center"
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
                boxSizing: "border-box",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group flex flex-col w-full min-w-0"
        >
            {/*image placeholder*/}
            <div 
              style={{ aspectRatio: "4/3", position: "relative" }}
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
            <div style={{ padding: "clamp(1.5rem, 3vw, 2rem)", boxSizing: "border-box" }} className="flex flex-col flex-1 w-full">
                <div
                    style={{ marginBottom: "clamp(0.5rem, 1.5vw, 0.75rem)" }}
                    className="flex flex-col gap-2 w-full min-w-0"
                >
                    <h3
                        style={{ fontSize: "clamp(1rem, 2.5vw, 1.125rem)", fontWeight: "700", lineHeight: "1.3" }}
                        className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200 w-full min-w-0"
                    >
                        {project.title}
                    </h3>
                    <span
                        style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", fontWeight: "500", flexShrink: 0 }}
                        className={`font-mono ${statusStyles[project.status]}`}
                    >
                        {statusLabels[project.status]}
                    </span>
                </div>

                <p
                    style={{ fontSize: "clamp(0.8rem, 1.5vw, 0.875rem)", lineHeight: "1.7", marginBottom: "clamp(1rem, 2vw, 1.25rem)" }}
                    className="text-[#555555] dark:text-[#a0a0a0] flex-1 w-full"
                >
                    {project.description}
                </p>

                {/* Tags */}
                <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "clamp(0.35rem, 1vw, 0.5rem)", marginBottom: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                    {project.tags.map((tag) => (
                        <Tag key={tag} label={tag} iconMap={fullIconMap}/>
                    ))}
                </div>

                {/* Buttons */}
                <div className="w-full project-buttons" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {project.demo && (

                        <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        style={{ padding: "clamp(0.5rem, 1vw, 0.625rem) clamp(1rem, 2vw, 1.5rem)", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", borderRadius: "0.5rem", flexShrink: 0 }}
                        className="font-mono bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 transition-all duration-200 text-center"
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
                        style={{ padding: "clamp(0.5rem, 1vw, 0.625rem) clamp(1rem, 2vw, 1.5rem)", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", borderRadius: "0.5rem", border: "1px solid", flexShrink: 0 }}
                        className="font-mono border-[#008f5a] dark:border-[#00ff9f] text-[#008f5a] dark:text-[#00ff9f] hover:bg-[#008f5a] dark:hover:bg-[#00ff9f] hover:text-white dark:hover:text-black transition-all duration-200 text-center"
                        >
                        GitHub ↗
                        </a>
                    )}
                    {!project.demo && !project.github && (
                        <span
                        style={{ padding: "clamp(0.5rem, 1vw, 0.625rem) clamp(1rem, 2vw, 1.5rem)", fontSize: "clamp(0.65rem, 1.5vw, 0.75rem)", borderRadius: "0.5rem", border: "1px solid" }}
                        className="font-mono border-[#e4e4e4] dark:border-[#1f1f1f] text-[#777777] dark:text-[#6b6b6b] text-center"
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
      style={{ padding: "clamp(60px, 10vw, 96px) clamp(16px, 4vw, 80px)", boxSizing: "border-box", maxWidth: "100vw" }}
      className="w-full overflow-x-hidden"
    >
      <style>{`
        @media (min-width: 640px) {
          .project-buttons {
            flex-direction: row !important;
          }
        }
      `}</style>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3rem" }}
      >
        <span
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
          className="font-mono text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase"
        >
          {">_ projects"}
        </span>
        <h2
          style={{ marginTop: "1rem" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]"
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
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full"
      >
        {featured && <motion.div variants={itemVariants} className="lg:col-span-2"><FeaturedProject project={featured} /></motion.div>}
        {rest.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
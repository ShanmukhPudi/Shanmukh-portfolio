import { ArrowUpRight } from "lucide-react"
import { PROJECTS } from "../../../constants"
import hbp from "../../../assets/hbp.webp"
import dispatch from "../../../assets/dispatch.webp"
import fms from "../../../assets/fms.webp"
import { MaskLines, FadeUp } from "../ui/Reveal"

// Optimised covers for this theme (the classic theme keeps using the originals)
const COVERS = { 1: hbp, 2: dispatch, 3: fms }
const LAYOUT = ["featured", "c-a", "c-b"]

// Cursor-following light, written straight to CSS vars so nothing re-renders
const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
}

const Projects = () => (
  <section id="projects" className="section wrap" aria-labelledby="projects-title">
    <div className="sec-head">
      <MaskLines as="h2" id="projects-title" className="h-display h-section" lines={["Selected work"]} />
      <span className="mono-note">{String(PROJECTS.length).padStart(2, "0")} projects</span>
    </div>

    <div className="proj-grid">
      {PROJECTS.map((p, i) => (
        <FadeUp
          as="article"
          key={p.id}
          delay={i * 0.12}
          className={`card ${LAYOUT[i] ?? "c-a"}`}
          onPointerMove={spotlight}
        >
          <div className="card-media">
            <img src={COVERS[p.id]} alt="" loading="lazy" width="1400" height="933" />
          </div>
          <div className="card-body">
            <span className={`status ${p.status === "live" ? "is-live" : ""}`}>
              <span className="dot" aria-hidden="true" />
              {p.status === "live" ? "Live" : "In development"}
            </span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags" aria-label="Built with">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {(p.demo || p.github) && (
              <div className="card-links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Live demo <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    Code <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
)

export default Projects

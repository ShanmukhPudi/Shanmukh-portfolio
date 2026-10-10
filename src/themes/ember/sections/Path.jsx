import { EXPERIENCE } from "../../../constants"
import { MaskLines, FadeUp } from "../ui/Reveal"

const ROWS = [
  ...EXPERIENCE.map((e) => ({
    key: `exp-${e.id}`,
    when: e.duration,
    title: e.role,
    where: `${e.company}, ${e.location}`,
    summary: e.summary,
  })),
  {
    key: "edu",
    when: "2022",
    title: "B.Tech, Computer Science",
    where: "Avanthi Institute of Engineering & Technology",
    summary: "Self-directed learner: builds several projects at once and learns by shipping them.",
  },
]

const Path = () => (
  <section id="path" className="section wrap" aria-labelledby="path-title">
    <div className="sec-head">
      <MaskLines as="h2" id="path-title" className="h-display h-section" lines={["Path"]} />
    </div>

    <div className="path-list">
      {ROWS.map((r, i) => (
        <FadeUp key={r.key} delay={i * 0.08} className="path-row">
          <span className="mono-label when">{r.when}</span>
          <div>
            <h3>{r.title}</h3>
            <p className="where">{r.where}</p>
          </div>
          <p className="summary">{r.summary}</p>
        </FadeUp>
      ))}
    </div>
  </section>
)

export default Path

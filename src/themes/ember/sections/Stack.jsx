import { MaskLines, FadeUp } from "../ui/Reveal"

const GROUPS = [
  { n: "01", title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"] },
  { n: "02", title: "Backend and data", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firestore", "Python", "JWT / RBAC", "Google Apps Script"] },
  { n: "03", title: "GenAI", items: ["LangChain / LangGraph", "ChromaDB", "Gemini API"] },
]

const ALL = GROUPS.flatMap((g) => g.items)

const Stack = () => (
  <section id="stack" className="section wrap" aria-labelledby="stack-title">
    <div className="sec-head">
      <MaskLines as="h2" id="stack-title" className="h-display h-section" lines={["Tech stack"]} />
    </div>

    <div className="stack-grid">
      {GROUPS.map((g, i) => (
        <FadeUp key={g.n} delay={i * 0.1} className="stack-col">
          <h3 className="mono-label">{g.n} / {g.title}</h3>
          <ul>
            {g.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeUp>
      ))}
    </div>

    {/* decorative ribbon, hidden from assistive tech since the lists above carry the content */}
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-set" key={copy}>
            {ALL.map((item) => (
              <span key={`${copy}-${item}`}>
                {item}
                <i>/</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stack

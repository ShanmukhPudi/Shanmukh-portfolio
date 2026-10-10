import { FadeUp } from "../ui/Reveal"

const Stats = () => (
  <FadeUp as="section" className="wrap stats" aria-label="At a glance" amount={0.3}>
    <div className="stat">
      <div className="stat-num">3+</div>
      <div className="stat-label">Years in production</div>
    </div>
    <div className="stat">
      <div className="stat-num">6+</div>
      <div className="stat-label">Systems owned solo</div>
    </div>
    <div className="stat">
      <div className="stat-text">GenAI and multi-agent systems</div>
      <div className="stat-label">Currently learning</div>
    </div>
    <div className="stat">
      <div className="stat-text"><span className="dot" aria-hidden="true" />Open to roles</div>
      <div className="stat-label">Frontend, product teams</div>
    </div>
  </FadeUp>
)

export default Stats

import { ArrowUpRight } from "lucide-react"
import { PERSONAL } from "../../../constants"
import { MaskLines, FadeUp } from "../ui/Reveal"
import Magnetic from "../ui/Magnetic"

const Contact = () => (
  <section id="contact" className="section wrap contact" aria-labelledby="contact-title">
    <MaskLines
      as="h2"
      id="contact-title"
      className="h-display contact-title"
      lines={["Let's build", "something", <span key="u" className="accent">useful.</span>]}
      stagger={0.12}
    />

    <FadeUp className="cta-row" delay={0.3}>
      <Magnetic>
        <a className="btn btn-primary" href={`mailto:${PERSONAL.email}`}>
          {PERSONAL.email} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </Magnetic>
      <a className="text-link" href={PERSONAL.github} target="_blank" rel="noreferrer">GitHub</a>
      <a className="text-link" href={PERSONAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    </FadeUp>

    <footer className="footer">
      <span>&copy; 2026 Shanmukh Pudi</span>
      <span>{PERSONAL.location}</span>
    </footer>
  </section>
)

export default Contact

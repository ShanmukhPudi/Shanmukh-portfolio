import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { PERSONAL } from "../../../constants"
import portrait from "../../../assets/profile.webp"
import { MaskLines } from "../ui/Reveal"
import Magnetic from "../ui/Magnetic"

const EASE = [0.16, 1, 0.3, 1]

const Hero = () => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70])

  return (
    <section className="hero wrap" ref={ref} aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <MaskLines
            as="p"
            className="eyebrow"
            lines={["Frontend Developer / React / GenAI"]}
            inView={false}
            delay={0.1}
          />
          <MaskLines
            as="h1"
            id="hero-title"
            className="h-display hero-title"
            lines={["Shanmukh", <span key="p" className="accent">Pudi</span>]}
            inView={false}
            delay={0.2}
            stagger={0.12}
          />
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            I turn messy manual workflows into fast, clear products. Three years of production work, six systems owned end to end.
          </motion.p>
          <motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
          >
            <Magnetic>
              <a className="btn btn-primary" href="#projects">
                Projects <ArrowDown size={16} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={PERSONAL.resume} download>
                Resume <Download size={16} aria-hidden="true" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="portrait-wrap"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}
        >
          <div className="portrait">
            <motion.img
              src={portrait}
              alt="Portrait of Shanmukh Pudi, face partly hidden under a black cap"
              width="900"
              height="1350"
              style={{ y: imgY }}
              fetchPriority="high"
            />
            <span className="portrait-tag">Visakhapatnam, IN</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

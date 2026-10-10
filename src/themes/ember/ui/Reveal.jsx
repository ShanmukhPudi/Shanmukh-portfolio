import { motion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1]

const lineVariants = {
  hidden: { y: "110%" },
  visible: (delay) => ({ y: "0%", transition: { duration: 1.1, ease: EASE, delay } }),
}

// Headline reveal: each line rises out of a clipping mask.
// The trigger sits on the heading itself (not the clipped line), otherwise the
// scroll observer would never see the hidden text as visible.
// `inView` false = play on mount (hero), true = play once when scrolled into view.
export const MaskLines = ({ as = "h2", lines, className, id, delay = 0, stagger = 0.1, inView = true }) => {
  const Tag = motion[as]
  const trigger = inView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.4 } }
    : { animate: "visible" }

  return (
    <Tag className={className} id={id} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span className="mask" key={i}>
          <motion.span className="mask-inner" variants={lineVariants} custom={delay + i * stagger}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

// Soft fade and rise, once per element
export const FadeUp = ({ as = "div", children, delay = 0, y = 24, amount = 0.2, className, ...rest }) => {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

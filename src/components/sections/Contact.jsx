import { useState } from "react"
import { motion } from "framer-motion"
import { PERSONAL } from "../../constants"

const containerVariants ={
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants ={
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit =() => {
        const subject = `Portfolio Contact from ${form.name}`
        const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`
        window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`
    }

    const isFormValid = form.name && form.email && form.message

    return (
        <section 
            id="contact"
            aria-label="Contact section"
            className="py-32 px-12 md:px-20 max-w-6xl mx-auto w-full"
        >

            {/*section header*/}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="font-mono text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                    {">_ contact"}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8] mt-3 mb-4">
                    Let's Work Together
                </h2>
                <p className="text-lg text-[#555555] dark:text-[#a0a0a0] max-w-xl">
                    Got a project in mind or just want to say hello? Fill in the details and hit send - I'll get back to you.
                </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-16">

        {/* LEFT — Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="font-mono text-sm text-[#555555] dark:text-[#a0a0a0]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              aria-required="true"
              className="px-4 py-3 rounded-lg border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] text-[#111111] dark:text-[#e8e8e8] font-mono text-sm placeholder-[#aaaaaa] dark:placeholder-[#444444] focus:outline-none focus:border-[#008f5a] dark:focus:border-[#00ff9f] transition-colors duration-200"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-mono text-sm text-[#555555] dark:text-[#a0a0a0]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              aria-required="true"
              className="px-4 py-3 rounded-lg border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] text-[#111111] dark:text-[#e8e8e8] font-mono text-sm placeholder-[#aaaaaa] dark:placeholder-[#444444] focus:outline-none focus:border-[#008f5a] dark:focus:border-[#00ff9f] transition-colors duration-200"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-mono text-sm text-[#555555] dark:text-[#a0a0a0]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              aria-required="true"
              className="px-4 py-3 rounded-lg border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] text-[#111111] dark:text-[#e8e8e8] font-mono text-sm placeholder-[#aaaaaa] dark:placeholder-[#444444] focus:outline-none focus:border-[#008f5a] dark:focus:border-[#00ff9f] transition-colors duration-200 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              aria-label="Send message via email"
              className={`px-8 py-4 font-mono text-sm rounded transition-all duration-200
                ${isFormValid
                  ? "bg-[#008f5a] dark:bg-[#00ff9f] text-white dark:text-black hover:opacity-80 cursor-pointer"
                  : "bg-[#e4e4e4] dark:bg-[#1f1f1f] text-[#aaaaaa] dark:text-[#444444] cursor-not-allowed"
                }`}
            >
              Send Message ↗
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — Direct Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6 md:w-72"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm text-[#777777] dark:text-[#6b6b6b] uppercase tracking-widest"
          >
            Or reach me directly
          </motion.p>

          {/* Email Link */}
          <motion.a
            variants={itemVariants}
            href={`mailto:${PERSONAL.email}`}
            aria-label="Send email to Shanmukh"
            className="flex items-center gap-4 p-5 rounded-xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group"
          >
            <span aria-hidden="true" className="text-xl">✉</span>
            <div>
              <p className="text-sm font-medium text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                Email
              </p>
              <p className="text-xs font-mono text-[#777777] dark:text-[#6b6b6b]">
                {PERSONAL.email}
              </p>
            </div>
          </motion.a>

          {/* GitHub Link */}
          <motion.a
            variants={itemVariants}
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shanmukh's GitHub profile"
            className="flex items-center gap-4 p-5 rounded-xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group"
          >
            <span aria-hidden="true" className="text-xl">🐙</span>
            <div>
              <p className="text-sm font-medium text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                GitHub
              </p>
              <p className="text-xs font-mono text-[#777777] dark:text-[#6b6b6b]">
                View my repositories
              </p>
            </div>
          </motion.a>

          {/* LinkedIn Link */}
          <motion.a
            variants={itemVariants}
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shanmukh's LinkedIn profile"
            className="flex items-center gap-4 p-5 rounded-xl border border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] hover:border-[#008f5a] dark:hover:border-[#00ff9f] transition-all duration-300 group"
          >
            <span aria-hidden="true" className="text-xl">💼</span>
            <div>
              <p className="text-sm font-medium text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                LinkedIn
              </p>
              <p className="text-xs font-mono text-[#777777] dark:text-[#6b6b6b]">
                Let's connect
              </p>
            </div>
          </motion.a>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact
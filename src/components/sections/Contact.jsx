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
            style={{ padding: "6rem 0" }}
            className="w-full"
        >
          <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 3rem"}}>

            {/*section header*/}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: "4rem" }}
            >
                <span className="font-mono text-sm text-[#008f5a] dark:text-[#00ff9f] tracking-widest uppercase">
                    {">_ contact"}
                </span>
                <h2 
                  style={{ marginTop: "1.5rem", marginBottom: "1rem" }}
                  className="text-4xl md:text-5xl font-bold text-[#111111] dark:text-[#e8e8e8]">
                    Let's Work Together
                </h2>
                <p className="text-lg text-[#555555] dark:text-[#a0a0a0] max-w-xl">
                    Got a project in mind or just want to say hello? Fill in the details and hit send - I'll get back to you.
                </p>
            </motion.div>
            
            <div 
              className="flex flex-col md:flex-row gap-16"
              style={{ alignItems: "flex-start" }}
            >

        {/* LEFT — Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 flex flex-col gap-6"
        >
          {/* Name */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
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
              style={{
                padding: "0.875rem 1.25rem",
                borderRadius: "0.625rem",
                border: "1px solid",
                fontSize: "0.9rem",
                outline: "none",
              }}
              className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] text-[#111111] dark:text-[#e8e8e8] font-mono placeholder-[#aaaaaa] dark:placeholder-[#444444] focus:border-[#008f5a] dark:focus:border-[#00ff9f] transition-colors duration-200"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
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
              style={{
                padding: "0.875rem 1.25rem",
                borderRadius: "0.625rem",
                border: "1px solid",
                fontSize: "0.9rem",
                outline: "none"
              }}
              className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] text-[#111111] dark:text-[#e8e8e8] font-mono placeholder-[#aaaaaa] dark:placeholder-[#444444] focus:border-[#008f5a] dark:focus:border-[#00ff9f] transition-colors duration-200"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
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
              style={{ 
                padding: "0.875rem 1.25rem",
                borderRadius: "0.625rem",
                border: "1px solid",
                fontSize: "0.9rem",
                outline: "none",
                resize: "none",
              }}
              className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] text-[#111111] dark:text-[#e8e8e8] font-mono placeholder-[#aaaaaa] dark:placeholder-[#444444] focus:border-[#008f5a] dark:focus:border-[#00ff9f] transition-colors duration-200"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              aria-label="Send message via email"
              style={{
                padding: "1rem 2.5rem",
                fontSize: "0.9rem",
                borderRadius: "0.625rem",
                border: "none",
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
              className={`font-mono font-semibold
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
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            minWidth: "280px",
          }}
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
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 143, 90, 0.12)" }}
            transition={{ duration: 0.25 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "0.875rem",
              border: "1px solid",
              textDecoration: "none",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group"
          >
            <span aria-hidden="true" style={{ fontSize: "1.25rem" }}>✉</span>
            <div>
              <p 
                style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem"}}
                className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
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
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 143, 90, 0.12)" }}
            transition={{ duration: 0.25 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: " 1rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "0.875rem",
              border: "1px solid",
              textDecoration: "none",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group"
          >
            <span aria-hidden="true" style={{ fontSize: "1.25rem" }}>🐙</span>
            <div>
              <p 
                style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem" }}
                className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
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
            whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0, 143, 90, 0.12)" }}
            transition={{ duration: 0.25 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "0.875rem",
              border: "1px solid",
              textDecoration: "none",
            }}
            className="border-[#e4e4e4] dark:border-[#1f1f1f] bg-white dark:bg-[#111111] group"
          >
            <span aria-hidden="true" style={{ fontSize: "1.25rem" }}>💼</span>
            <div>
              <p 
                style={{ fontSize: "0.9rem", fontWeight: "600", marginBottom: "0.2rem" }}
                className="text-[#111111] dark:text-[#e8e8e8] group-hover:text-[#008f5a] dark:group-hover:text-[#00ff9f] transition-colors duration-200">
                LinkedIn
              </p>
              <p className="text-xs font-mono text-[#777777] dark:text-[#6b6b6b]">
                Let's connect
              </p>
            </div>
          </motion.a>

        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
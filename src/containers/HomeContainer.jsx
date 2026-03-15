import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import TechStack from "../components/sections/TechStack"
import Projects from "../components/sections/Projects"
import Experience from "../components/sections/Experience"
import Contact from "../components/sections/Contact"
import SectionDivider from "../components/ui/Sectiondivider"

const HomeContainer = () => {
    return (
        <main>
            <Hero />
            <SectionDivider />
            <div className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d] flex justify-center">
                <div style={{ width: "100%", maxWidth: "1550px", padding: "0 3rem" }}>
            <About />
                </div>
            </div>
            <SectionDivider />
            <TechStack />
            <SectionDivider />
            <div className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d]">
                <Projects />
            </div>
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <div className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d]">
                <Contact />
            </div>
        </main>
    )
}

export default HomeContainer
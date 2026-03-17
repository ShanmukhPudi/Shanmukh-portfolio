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
            <div className="w-full flex justify-center">
                <div style={{ width: "100%", maxWidth: "1100px", padding: "0 3rem" }}>
                     <TechStack />
                </div>
            </div>
            <SectionDivider />
            <div className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d] flex justify-center">
                <div style={{ width: "100%", maxWidth: "1550px", padding: "0 10rem"}}>
                <Projects />
                </div>
            </div>
            <SectionDivider />
            <div className="w-full flex justify-center">
                <div style={{ width: "100%", maxWidth: "1500px", padding: "0 6rem" }}>
                    <Experience />
                </div>
            </div>
            <SectionDivider />
            <div className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d]">
                <Contact />
            </div>
        </main>
    )
}

export default HomeContainer
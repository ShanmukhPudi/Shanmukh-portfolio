import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import TechStack from "../components/sections/TechStack"
import SectionDivider from "../components/ui/Sectiondivider"

const HomeContainer = () => {
    return (
        <main>
            <Hero />
            <SectionDivider />
            <div className="w-full bg-[#f4f4f4] dark:bg-[#0d0d0d]">
            <About />
            </div>
            <SectionDivider />
            <TechStack />
            <SectionDivider />
        </main>
    )
}

export default HomeContainer
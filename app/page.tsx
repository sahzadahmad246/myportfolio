import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { FeaturedProjects } from "@/components/featured-projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="starry-background"></div>
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 pt-0 pb-12 space-y-32 relative z-10">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

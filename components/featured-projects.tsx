"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "Soni Painting Business Manager",
      description:
        "A comprehensive business management platform for painters to create quotations, generate invoices, manage client relationships, and track project progress with payment collection features.",
      image: "/business-management-dashboard-for-painters.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "shadcn/ui"],
      github: "https://github.com/sahzadahmad246/sonipaintingapp",
      live: "https://www.sonipainting.com/",
      featured: true,
    },
    {
      title: "Poetry Platform",
      description:
        "An elegant poetry platform where admins can manage poetry content with detailed articles, while users enjoy a beautiful feed with bookmark, like, and download couplet features.",
      image: "/poetry-platform-with-elegant-design.png",
      technologies: ["Next.js", "TypeScript", "Redis", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/sahzadahmad246/unmatched-lines",
      live: "https://www.unmatchedlines.com/",
      featured: true,
    },
  ]

  return (
    <section id="featured" className="py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Projects I'm Proud Of</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some of my favorite projects that showcase my skills in full-stack development, from concept to
          deployment.
        </p>
      </motion.div>

      <div className="space-y-20">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <motion.div
              className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-lg border border-border"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

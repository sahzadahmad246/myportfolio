"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "Food Ordering Platform",
      description:
        "A comprehensive food ordering system like Zomato with customer cart functionality, Razorpay checkout, and restaurant dashboard for order management, menu updates, and analytics.",
      technologies: ["React", "JavaScript", "MongoDB", "Express.js", "Razorpay"],
      github: "#",
      live: "#",
    },
    {
      title: "Pothole Reporting Map",
      description:
        "A civic platform for reporting road potholes with image uploads, location details, size information, and moderation system for status updates and spam detection.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "shadcn/ui", "Maps API"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-0 border border-red-500" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">All Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A collection of projects I've built to explore new technologies and solve interesting problems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-card border border-border rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="flex-1">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

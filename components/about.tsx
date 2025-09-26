"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-0">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full-stack developer with 2 years of experience building modern web applications. I love
              working at the intersection of design and engineering, creating digital experiences that solve real-world
              problems for businesses and users.
            </p>
            <p>
              My journey started with frontend development, but I quickly expanded to the entire stack. From crafting
              responsive user interfaces with React and Next.js to designing efficient backend systems with Node.js and
              databases, I enjoy every aspect of bringing ideas to life through code.
            </p>
            <p>
              I specialize in building business management platforms, content management systems, and e-commerce
              solutions that help businesses streamline their operations and grow their reach.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Full Stack Developer</h4>
                  <span className="text-sm text-muted-foreground">2023 — PRESENT</span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">Freelance & Projects</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developed comprehensive business management platforms, content management systems, and e-commerce
                  solutions. Built scalable applications serving real businesses with features like payment processing,
                  inventory management, and user authentication.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">MongoDB</span>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Node.js</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

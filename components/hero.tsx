"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-0">
      <motion.div
        className="space-y-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-balance mb-4">Shahzad</h1>
          <p className="text-xl text-muted-foreground font-mono">Full Stack Developer</p>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I build accessible, pixel-perfect digital experiences for the web, specializing in modern JavaScript
          frameworks and scalable backend systems with 2 years of experience.
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          I'm a passionate full-stack developer with 2 years of experience crafting scalable web applications. I
          specialize in building modern, responsive interfaces and robust backend systems that solve real-world
          problems.
        </p>

        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          My expertise spans across the entire development stack, from creating intuitive user interfaces with React and
          Next.js to building efficient APIs and managing databases. I'm passionate about writing clean, maintainable
          code and delivering exceptional user experiences.
        </p>
      </motion.div>
    </section>
  )
}

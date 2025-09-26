"use client"

import { motion } from "framer-motion"

export function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "shadcn/ui", icon: "🎯" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Next.js", icon: "▲" },
    { name: "Redis", icon: "🔴" },
    { name: "GraphQL", icon: "📊" },
    { name: "Git", icon: "📝" },
    { name: "Vercel", icon: "🔺" },
  ]

  return (
    <section id="skills" className="py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
              <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

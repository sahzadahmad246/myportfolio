"use client"

import { Mail, Twitter, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-0">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm always interested in hearing about new opportunities and interesting projects. Whether you're a company
          looking to hire, or you're a fellow developer who wants to collaborate, I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Button asChild className="w-full justify-start">
              <a href="mailto:shahzad@example.com">
                <Mail className="w-4 h-4 mr-3" />
                shahzad@example.com
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" asChild className="w-full justify-start bg-transparent">
              <a href="https://twitter.com/shahzad_dev" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4 mr-3" />
                DM me on Twitter
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="flex gap-4 mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/shahzad" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://linkedin.com/in/shahzad" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://twitter.com/shahzad_dev" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>

        <p className="text-sm text-muted-foreground mt-8">© 2025 Shahzad. Built with Next.js and Tailwind CSS.</p>
      </motion.div>
    </section>
  )
}

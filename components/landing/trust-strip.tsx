"use client"

import { motion } from "framer-motion"
import { Eye, GitCompare, Search } from "lucide-react"

const points = [
  {
    icon: Eye,
    text: "Показывает то, что уже видно клиенту"
  },
  {
    icon: GitCompare,
    text: "Находит разрывы между обещанием и реальным путём"
  },
  {
    icon: Search,
    text: "Помогает понять, где нужен внутренний аудит"
  }
]

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-lg text-foreground font-medium text-balance">
            Это не рекламная презентация. Это внешний взгляд на digital-путь банка.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FAFF00]/20 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-[#2E1A47]" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

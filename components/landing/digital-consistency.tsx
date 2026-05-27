"use client"

import { motion } from "framer-motion"
import { Target, Globe, Megaphone, Smartphone, Users } from "lucide-react"

const channels = [
  { icon: Target, label: "Стратегия", status: "Средне" },
  { icon: Globe, label: "Сайт", status: "Средне" },
  { icon: Megaphone, label: "Реклама", status: "Средне" },
  { icon: Smartphone, label: "Приложение", status: "Средне" },
  { icon: Users, label: "Соцсети", status: "Средне" },
]

export function DigitalConsistency() {
  return (
    <section id="problems" className="py-20 lg:py-32 bg-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFF00]/20 border border-[#FAFF00]/30 mb-6">
            <span className="text-sm text-[#FAFF00]">Digital Consistency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Общая оценка digital consistency: <span className="text-[#FAFF00]">Средне</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            AVO уже выглядит как современный цифровой банк: сильный бренд, активная реклама и заметный digital-образ. Но между рекламой, сайтом, приложением и публичным доверием видны разрывы.
          </p>
        </motion.div>

        {/* Consistency Map */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FAFF00]/30 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#FAFF00]/20 transition-colors">
                <channel.icon className="w-7 h-7 text-white/70 group-hover:text-[#FAFF00] transition-colors" />
              </div>
              <h3 className="text-white font-semibold mb-2">{channel.label}</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-[#FAFF00]/20 text-[#FAFF00] text-sm font-medium">
                {channel.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Connection lines visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <p className="text-center text-white/60 text-sm mb-4">Связь между каналами</p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-sm">Реклама</span>
            <span className="text-[#FAFF00]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-300 text-sm border border-orange-500/30">Разрыв</span>
            <span className="text-[#FAFF00]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-sm">Сайт</span>
            <span className="text-[#FAFF00]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-300 text-sm border border-orange-500/30">Разрыв</span>
            <span className="text-[#FAFF00]">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 text-sm">Приложение</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Search, Users, AlertTriangle, TrendingUp } from "lucide-react"
import { ContactFormDialog } from "./contact-form-dialog"

const cards = [
  {
    icon: Search,
    title: "Где именно клиенты уходят",
    description: "После клика, после установки, на регистрации, на идентификации или уже на продукте"
  },
  {
    icon: Users,
    title: "Какие рекламные сообщения работают",
    description: "Только внутренние данные покажут, какие офферы дают не просто установки, а реальных клиентов"
  },
  {
    icon: AlertTriangle,
    title: "Точная причина и масштаб проблем",
    description: "Без внутреннего аудита банк видит симптомы, но не видит точную причину каждой проблемы"
  },
  {
    icon: TrendingUp,
    title: "Разрывы между каналами",
    description: "Снаружи уже видно, что между рекламой, сайтом и приложением есть разрывы"
  }
]

export function WhyInternalAudit() {
  return (
    <section className="py-20 lg:py-32 bg-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Почему AVO нужен<br className="hidden sm:block" /> полный внутренний аудит
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Снаружи уже видно, что между рекламой, сайтом и приложением есть разрывы. Но только внутренние данные покажут, где именно клиенты уходят: после клика, после установки, на регистрации, на идентификации или уже внутри продукта.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FAFF00]/50 hover:bg-white/15 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAFF00] flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                <card.icon className="w-6 h-6 text-[#2E1A47]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ContactFormDialog variant="yellow" />
        </motion.div>
      </div>
    </section>
  )
}

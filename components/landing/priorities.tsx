"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

const priorities = [
  {
    number: "1",
    title: "Упростить путь от рекламы до понятного следующего шага для клиента."
  },
  {
    number: "2",
    title: "Улучшить мобильную скорость сайта и убрать самые заметные слабые места."
  },
  {
    number: "3",
    title: "Переписать рекламные офферы более простым и более честным языком."
  },
  {
    number: "4",
    title: "Сильнее объяснять условия продукта до установки приложения, а не после."
  },
  {
    number: "5",
    title: "Усилить работу с отзывами в App Store и Google Play и отдельно разобрать жалобы на вход, регистрацию и поддержку."
  },
  {
    number: "6",
    title: "Добавить больше простого полезного контента в соцсетях: как работает продукт, что важно знать, какие шаги ждут клиента дальше."
  }
]

export function Priorities() {
  return (
    <section id="priorities" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/30 mb-6">
            <Calendar className="w-4 h-4 text-[#2E1A47]" />
            <span className="text-sm text-muted-foreground">Action Plan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Что стоит проверить и улучшить<br className="hidden sm:block" /> в первые 90 дней
          </h2>
        </motion.div>

        {/* Priorities List */}
        <div className="max-w-4xl mx-auto">
          {priorities.map((priority, index) => (
            <motion.div
              key={priority.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-6 py-6 border-b border-border last:border-0"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#2E1A47] flex items-center justify-center group-hover:bg-[#FAFF00] transition-colors">
                <span className="text-2xl font-bold text-white group-hover:text-[#2E1A47] transition-colors">
                  {priority.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-3">
                <p className="text-lg text-foreground leading-relaxed">
                  {priority.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

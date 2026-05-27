"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import { CalendlyPopupButton } from "./calendly-popup-button"

const problems = [
  {
    number: "01",
    title: "Разрыв между обещанием и реальностью",
    description: "Банк обещает быстрый и простой путь к деньгам, но реальный путь пользователя часто идёт через установку приложения, регистрацию и дополнительные шаги. Часть потенциальных клиентов может уходить с пользовательского пути."
  },
  {
    number: "02",
    title: "Проблемы скорости мобильного сайта",
    description: "На мобильной версии сайта уже видны проблемы со скоростью. Если страница открывается не быстро, часть платного трафика может теряться после перехода."
  },
  {
    number: "03",
    title: "Однотипные рекламные обещания",
    description: "В рекламе почти везде повторяются одни и те же обещания: 0%, быстро, до 100 млн, без залога. Клиенту сложно понять, чем AVO заметно отличается от других банков."
  },
  {
    number: "04",
    title: "Скрытые условия снижают доверие",
    description: "На сайте сильные обещания видны сразу, но важные условия клиент узнаёт позже. Это может снижать доверие и вызывать ощущение, что продукт сложнее, чем казалось сначала."
  },
  {
    number: "05",
    title: "Конкуренты выглядят понятнее",
    description: "Конкуренты, особенно TBC Bank Uzbekistan, Uzum Bank и Anorbank, во многих точках выглядят понятнее: у них проще считывается продукт, путь и причина выбрать именно этот банк."
  }
]

export function CeoSummary() {
  return (
    <section id="ceo-summary" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/30 mb-6">
            <AlertTriangle className="w-4 h-4 text-[#2E1A47]" />
            <span className="text-sm text-muted-foreground">CEO Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            5 ключевых проблем, которые<br className="hidden sm:block" /> уже видны снаружи
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Эти проблемы могут влиять на конверсию, доверие и эффективность маркетинговых инвестиций
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-[#2E1A47]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl lg:text-6xl font-bold text-[#2E1A47]/10 group-hover:text-[#FAFF00]/50 transition-colors">
                    {problem.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Yellow accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FAFF00]/0 group-hover:bg-[#FAFF00] transition-colors rounded-l-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <CalendlyPopupButton 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white h-11 px-8"
          />
        </motion.div>
      </div>
    </section>
  )
}

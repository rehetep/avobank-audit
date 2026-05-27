"use client"

import { motion } from "framer-motion"
import { FileText, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const journeySteps = [
  { label: "Реклама", status: "ok" },
  { label: "Клик", status: "ok" },
  { label: "Мобильный сайт", status: "risk", risk: "не идеально быстро" },
  { label: "Установка", status: "risk", risk: "условия не ясны" },
  { label: "Регистрация", status: "risk", risk: "жалобы на вход" },
  { label: "Заявка", status: "risk", risk: "сложный путь" },
  { label: "Использование", status: "ok" },
]

const lossPoints = [
  {
    issue: "Сложный путь после рекламы",
    consequence: "Часть клиентов может уходить после рекламы user journey, когда понимает, что впереди установка приложения и дополнительные шаги"
  },
  {
    issue: "Мобильный сайт работает не идеально быстро",
    consequence: "Часть людей может не дождаться или потерять интерес уже после перехода"
  },
  {
    issue: "Слабое объяснение условий в первом касании клиента",
    consequence: "Снижается доверие, потому что полная картина раскрывается не сразу"
  },
  {
    issue: "Однотипная реклама",
    consequence: "Клиенту сложнее понять отличие AVO от других банков"
  },
  {
    issue: "Жалобы в приложении",
    consequence: "Новые пользователи могут не доходить до реального использования продукта"
  },
  {
    issue: "Конкуренты выглядят понятнее",
    consequence: "Клиент может выбрать другой банк ещё до заявки"
  }
]

export function UserJourneyRisk() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/30 mb-6">
            <AlertCircle className="w-4 h-4 text-[#2E1A47]" />
            <span className="text-sm text-muted-foreground">User Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Где банк может терять клиентов и возможности
          </h2>
        </motion.div>

        {/* Journey Flow */}
        <div className="relative mb-16">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-start justify-between gap-2">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-1 relative"
              >
                {/* Step card */}
                <div className={`p-4 rounded-xl border text-center ${
                  step.status === "risk" 
                    ? "bg-orange-500/10 border-orange-500/30" 
                    : "bg-muted/50 border-border"
                }`}>
                  <span className={`text-sm font-medium ${
                    step.status === "risk" ? "text-orange-600" : "text-foreground"
                  }`}>
                    {step.label}
                  </span>
                </div>
                
                {/* Risk label */}
                {step.risk && (
                  <div className="mt-3 text-center">
                    <span className="text-xs text-orange-600 bg-orange-500/10 px-2 py-1 rounded">
                      {step.risk}
                    </span>
                  </div>
                )}

                {/* Arrow */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-4 right-0 transform translate-x-1/2 text-muted-foreground">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-3">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className={`flex-1 p-4 rounded-xl border ${
                  step.status === "risk" 
                    ? "bg-orange-500/10 border-orange-500/30" 
                    : "bg-muted/50 border-border"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      step.status === "risk" ? "text-orange-600" : "text-foreground"
                    }`}>
                      {step.label}
                    </span>
                    {step.risk && (
                      <span className="text-xs text-orange-600 bg-orange-500/10 px-2 py-1 rounded">
                        {step.risk}
                      </span>
                    )}
                  </div>
                </div>
                {index < journeySteps.length - 1 && (
                  <span className="text-muted-foreground text-xl">↓</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Loss Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/50 border-b border-border">
              <div className="text-sm font-semibold text-foreground">Что видно</div>
              <div className="text-sm font-semibold text-foreground hidden md:block">Почему это проблема для банка</div>
            </div>
            
            {/* Table Rows */}
            {lossPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span className="text-foreground font-medium">{point.issue}</span>
                </div>
                <div className="flex items-start gap-3 md:gap-0">
                  <ArrowRight className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0 md:hidden" />
                  <span className="text-muted-foreground leading-relaxed">{point.consequence}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            Внешний аудит показывает симптомы. Внутренний аудит нужен, чтобы увидеть точные точки выхода, масштаб потерь и связь рекламных сообщений с реальными клиентами.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white"
          >
            <a href="https://calendly.com/rp-bartka/30min" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Открыть полный аудит
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText, AlertTriangle, TrendingDown, Smartphone, BarChart3, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const auditCards = [
  { icon: TrendingDown, label: "Реклама", status: "Средне", color: "text-[#FAFF00]" },
  { icon: Smartphone, label: "Сайт", status: "Риск", color: "text-orange-400" },
  { icon: BarChart3, label: "Приложение", status: "Средне", color: "text-[#FAFF00]" },
  { icon: Users, label: "Отзывы", status: "Риск", color: "text-orange-400" },
  { icon: AlertTriangle, label: "Конкуренты", status: "Потеря", color: "text-red-400" },
]

export function Hero() {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#2E1A47]/5" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E1A47]/10 border border-[#2E1A47]/20"
            >
              <div className="w-2 h-2 rounded-full bg-[#FAFF00]" />
              <span className="text-sm text-muted-foreground font-medium">
                Внешний digital-аудит · AVO Bank Uzbekistan
              </span>
            </motion.div>

            {/* Headline */}
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
              Где AVO Bank может терять клиентов между{" "}
              <span className="text-[#2E1A47]">рекламой</span>,{" "}
              <span className="text-[#2E1A47]">сайтом</span> и{" "}
              <span className="text-[#2E1A47]">приложением</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              Мы проанализировали видимый digital-путь AVO Bank в Узбекистане: рекламу, сайт, приложение, отзывы, социальные каналы и конкурентную среду. Снаружи уже видны разрывы, которые могут снижать доверие, конверсию и эффективность платного трафика.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00]" />
                Рынок: Узбекистан
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00]" />
                Дата: 15 мая 2026
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00]" />
                Внешний аудит
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white px-8"
              >
                <a href="https://calendly.com/rp-bartka/30min" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5 mr-2" />
                  Открыть полный аудит
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-[#2E1A47]/30 hover:bg-[#2E1A47]/5"
              >
                <a href="#ceo-summary">
                  Посмотреть 5 ключевых рисков
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Audit Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-[#2E1A47] rounded-2xl p-6 lg:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAFF00] flex items-center justify-center">
                    <span className="text-[#2E1A47] font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">AVO Bank</p>
                    <p className="text-white/60 text-sm">Digital Audit Score</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-[#FAFF00]/20 border border-[#FAFF00]/40">
                  <span className="text-[#FAFF00] font-semibold text-sm">Средне</span>
                </div>
              </div>

              {/* Score visualization */}
              <div className="mb-8 p-4 rounded-xl bg-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/60 text-sm">Общая оценка consistency</span>
                  <span className="text-white font-mono">62/100</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "62%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-[#FAFF00] to-[#FAFF00]/60 rounded-full"
                  />
                </div>
              </div>

              {/* Audit cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {auditCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <card.icon className="w-5 h-5 text-white/60 mb-2" />
                    <p className="text-white text-sm font-medium">{card.label}</p>
                    <p className={`text-xs ${card.color}`}>{card.status}</p>
                  </motion.div>
                ))}
              </div>

              {/* Blurred report preview hint */}
              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-white/60" />
                  <span className="text-white/80 text-sm">Полный отчёт</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white/20 rounded w-full blur-[1px]" />
                  <div className="h-2 bg-white/15 rounded w-4/5 blur-[1px]" />
                  <div className="h-2 bg-white/10 rounded w-3/5 blur-[1px]" />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FAFF00]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#2E1A47]/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

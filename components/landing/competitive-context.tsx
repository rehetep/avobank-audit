"use client"

import { motion } from "framer-motion"
import { Building2, TrendingUp, Users, Shield } from "lucide-react"

const competitors = [
  {
    name: "TBC Bank Uzbekistan",
    description: "очень чётко выглядит как цифровой банк и лучше доказывает это через сайт, приложение и публичный образ",
    icon: TrendingUp,
    accent: "from-blue-500/20 to-blue-600/5"
  },
  {
    name: "Uzum Bank",
    description: "сильнее выглядит как часть повседневной экосистемы, а не только как место для кредита или карты",
    icon: Users,
    accent: "from-green-500/20 to-green-600/5"
  },
  {
    name: "Anorbank",
    description: "во многих точках проще объясняет продукты и выглядит более понятным для ежедневного использования",
    icon: Building2,
    accent: "from-purple-500/20 to-purple-600/5"
  },
  {
    name: "Hamkorbank",
    description: "выглядит более традиционным банком, но за счёт масштаба и продуктовой широты может вызывать больше ощущения устойчивости",
    icon: Shield,
    accent: "from-orange-500/20 to-orange-600/5"
  }
]

export function CompetitiveContext() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/30 mb-6">
            <span className="text-sm text-muted-foreground">Конкурентный контекст</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Почему это важно именно сейчас
          </h2>
        </motion.div>

        {/* Competitor Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${competitor.accent} border border-border hover:border-[#2E1A47]/30 transition-all`}
            >
              <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <competitor.icon className="w-6 h-6 text-[#2E1A47]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {competitor.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {competitor.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-6 lg:p-8 rounded-2xl bg-[#2E1A47] text-center">
            <p className="text-white/90 text-lg leading-relaxed">
              Если конкурент объясняет продукт проще и выглядит спокойнее и надёжнее, клиент может выбрать его ещё до заявки. Для AVO это риск не только потери клиента, но и роста зависимости от яркой рекламы вместо сильного и понятного клиентского пути.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

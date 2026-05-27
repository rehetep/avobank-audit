"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormDialog } from "./contact-form-dialog"

export function FinalCta() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Purple accent line */}
          <div className="w-16 h-1 bg-[#2E1A47] mx-auto rounded-full" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Откройте полный аудит AVO Bank
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Внутри — структурированный внешний разбор рекламы, сайта, приложения, отзывов, соцсетей и конкурентов. Это первый шаг к точному внутреннему аудиту digital-продаж.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white font-semibold px-8"
            >
              <a href="https://calendly.com/rp-bartka/30min" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5 mr-2" />
                Открыть полный аудит
              </a>
            </Button>
            <ContactFormDialog variant="outline" />
          </div>

          <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto">
            Аудит подготовлен на основе открытых источников. Для точного расчёта потерь, причин отказов и эффективности рекламы нужен внутренний аудит.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { ContactFormDialog } from "./contact-form-dialog"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Bartka Agency */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3">
              <svg 
                viewBox="0 0 95 125" 
                fill="none" 
                className="w-9 h-10"
                aria-label="Bartka Agency logo"
              >
                <path d="M92.63 70.3999L2 122.73V86.4699L92.63 34.1499V70.3999Z" fill="#D20000" />
                <path d="M65.44 36.25L2 72.88V36.63L65.44 0V36.25Z" fill="#D20000" />
              </svg>
              <div>
                <p className="font-semibold text-foreground">Bartka Agency</p>
                <p className="text-sm text-muted-foreground">Marketing agency for finance and fintech</p>
              </div>
            </div>
            <ContactFormDialog>
              <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground p-0 h-auto">
                <MessageSquare className="w-4 h-4 mr-1" />
                welcome@bartka.agency
              </Button>
            </ContactFormDialog>
          </div>

          {/* Center: Prepared for */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted"
          >
            <div className="w-8 h-8 rounded bg-[#FAFF00] flex items-center justify-center">
              <span className="text-[#2E1A47] font-bold text-sm">A</span>
            </div>
            <span className="text-sm text-muted-foreground">Prepared for AVO Bank Uzbekistan</span>
          </motion.div>

          {/* Right: Links */}
          <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs leading-relaxed text-muted-foreground text-pretty max-w-4xl mx-auto">
            <span className="font-semibold text-foreground">Дисклеймер / Отказ от ответственности:</span> Данный
            аналитический материал (маркетинговый аудит) подготовлен экспертами Bartka Agency исключительно в
            исследовательских и демонстрационных целях. Все аналитические выводы, оценки и рекомендации основаны на
            мониторинге открытых публичных источников (OSINT) и не содержат конфиденциальной информации банка. Товарный
            знак, логотип и фирменное наименование «AVO Bank» принадлежат их законному правообладателю. Bartka Agency
            является независимым агентством, не связано с правообладателем, не действует от его имени и не претендует на
            права интеллектуальной собственности третьих лиц. Материал не преследует цель дискредитации бренда и
            направлен исключительно на демонстрацию общих рыночных зон роста в сфере MarTech/UX.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Bartka Agency. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

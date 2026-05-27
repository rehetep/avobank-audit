"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#ceo-summary", label: "Выводы" },
  { href: "#problems", label: "Проблемы" },
  { href: "#priorities", label: "90 дней" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Bartka Agency Logo */}
            <div className="flex items-center gap-2">
              <svg 
                viewBox="0 0 95 125" 
                fill="none" 
                className="w-7 h-8"
                aria-label="Bartka Agency logo"
              >
                <path d="M92.63 70.3999L2 122.73V86.4699L92.63 34.1499V70.3999Z" fill="#D20000" />
                <path d="M65.44 36.25L2 72.88V36.63L65.44 0V36.25Z" fill="#D20000" />
              </svg>
              <span className="font-semibold text-foreground tracking-tight">Bartka Agency</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right side: AVO Badge + CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/30">
                <div className="w-5 h-5 rounded bg-[#FAFF00] flex items-center justify-center">
                  <span className="text-[#2E1A47] font-bold text-[10px]">A</span>
                </div>
                <span className="text-xs text-muted-foreground">Внешний digital-аудит</span>
              </div>
              
              <Button 
                asChild
                className="hidden sm:inline-flex bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white"
              >
                <a href="https://calendly.com/rp-bartka/30min" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Открыть полный аудит
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-background border-b border-border shadow-lg lg:hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild
                className="mt-2 bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white"
              >
                <a href="https://calendly.com/rp-bartka/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  <FileText className="w-4 h-4 mr-2" />
                  Открыть полный аудит
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

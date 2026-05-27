"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero (roughly 80vh)
      const heroHeight = window.innerHeight * 0.8
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border lg:hidden"
        >
          <Button 
            asChild
            size="lg"
            className="w-full bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white"
          >
            <a href="https://calendly.com/rp-bartka/30min" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Открыть полный аудит
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

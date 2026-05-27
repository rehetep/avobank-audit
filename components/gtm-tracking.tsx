"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Declare dataLayer type
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export function GTMTracking() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    // Track page view
    window.dataLayer.push({
      event: "page_view",
      page_path: pathname,
    })

    // Track scroll depth
    let scrollDepths = { 25: false, 50: false, 75: false, 100: false }
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      const depths = [25, 50, 75, 100] as const
      depths.forEach((depth) => {
        if (scrollPercent >= depth && !scrollDepths[depth]) {
          scrollDepths[depth] = true
          window.dataLayer.push({
            event: "scroll_depth",
            scroll_depth: depth,
          })
        }
      })
    }

    // Track link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      
      if (link) {
        const href = link.getAttribute("href")
        const text = link.textContent?.trim()

        // Track Calendly clicks (Открыть полный аудит)
        if (href?.includes("calendly.com")) {
          window.dataLayer.push({
            event: "cta_click",
            cta_type: "open_full_audit",
            cta_text: text,
            cta_url: href,
          })
        }
        // Track external links
        else if (href?.startsWith("http") && !href?.includes(window.location.hostname)) {
          window.dataLayer.push({
            event: "outbound_link_click",
            link_text: text,
            link_url: href,
          })
        }
        // Track internal anchor links
        else if (href?.startsWith("#")) {
          window.dataLayer.push({
            event: "anchor_link_click",
            anchor: href,
            link_text: text,
          })
        }
      }
    }

    // Track button clicks
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const button = target.closest("button")
      
      if (button) {
        const text = button.textContent?.trim()
        
        // Track "Обсудить с Bartka Agency" button
        if (text?.includes("Обсудить") || text?.includes("Bartka")) {
          window.dataLayer.push({
            event: "cta_click",
            cta_type: "contact_agency",
            cta_text: text,
          })
        }
        // Track "Открыть полный аудит" button
        else if (text?.includes("Открыть полный аудит") || text?.includes("полный аудит")) {
          window.dataLayer.push({
            event: "cta_click",
            cta_type: "open_full_audit",
            cta_text: text,
          })
        }
      }
    }

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("click", handleLinkClick)
    document.addEventListener("click", handleButtonClick)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleLinkClick)
      document.removeEventListener("click", handleButtonClick)
    }
  }, [pathname])

  return null
}

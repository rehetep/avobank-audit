"use client"

import { useEffect, useState } from "react"
import { PopupModal } from "react-calendly"
import { FileText } from "lucide-react"

interface CalendlyPopupButtonProps {
  className?: string
  text?: string
  showIcon?: boolean
}

export function CalendlyPopupButton({ 
  className = "", 
  text = "Открыть полный аудит",
  showIcon = true 
}: CalendlyPopupButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Set root element after mount
    setRootElement(document.body)
    
    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        // Track Calendly events in GTM
        if (typeof window !== "undefined" && window.dataLayer) {
          if (e.data.event === "calendly.profile_page_viewed") {
            window.dataLayer.push({
              event: "calendly_opened",
              calendly_event: "profile_page_viewed"
            })
          }
          if (e.data.event === "calendly.event_type_viewed") {
            window.dataLayer.push({
              event: "calendly_event_type_viewed",
              calendly_event: "event_type_viewed"
            })
          }
          if (e.data.event === "calendly.date_and_time_selected") {
            window.dataLayer.push({
              event: "calendly_date_selected",
              calendly_event: "date_and_time_selected"
            })
          }
          if (e.data.event === "calendly.event_scheduled") {
            window.dataLayer.push({
              event: "calendly_booking_complete",
              calendly_event: "event_scheduled",
              calendly_event_uri: e.data.payload?.event?.uri,
              calendly_invitee_uri: e.data.payload?.invitee?.uri,
            })
          }
        }
      }
    }

    window.addEventListener("message", handleCalendlyEvent)
    return () => window.removeEventListener("message", handleCalendlyEvent)
  }, [])

  const handleClick = () => {
    // Track button click in GTM
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "cta_click",
        cta_text: text,
        cta_type: "calendly_popup"
      })
    }
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
      >
        {showIcon && <FileText className="w-5 h-5 mr-2" />}
        {text}
      </button>
      {rootElement && (
        <PopupModal
          url="https://calendly.com/rp-bartka/30min"
          rootElement={rootElement}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
        />
      )}
    </>
  )
}

// Add dataLayer type for GTM
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

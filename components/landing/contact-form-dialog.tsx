"use client"

import { useState } from "react"
import { MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ContactFormDialogProps {
  variant?: "default" | "outline" | "yellow"
  className?: string
  children?: React.ReactNode
}

export function ContactFormDialog({ variant = "default", className, children }: ContactFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Произошла ошибка при отправке")
      }

      setStatus("success")
      setFormData({ fullName: "", email: "", phone: "" })
      
      // Close dialog after 2 seconds on success
      setTimeout(() => {
        setOpen(false)
        setStatus("idle")
      }, 2000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Произошла ошибка")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getButtonStyles = () => {
    if (variant === "yellow") {
      return "bg-[#FAFF00] hover:bg-[#FAFF00]/90 text-[#2E1A47] font-semibold px-8"
    }
    if (variant === "outline") {
      return "border-[#2E1A47]/30 text-[#2E1A47] hover:bg-[#2E1A47]/5"
    }
    return "bg-[#2E1A47] hover:bg-[#2E1A47]/90 text-white font-semibold px-8"
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button 
            variant={variant === "outline" ? "outline" : "default"}
            size="lg"
            className={className || getButtonStyles()}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Обсудить с Bartka Agency
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Связаться с Bartka Agency</DialogTitle>
          <DialogDescription>
            Оставьте ваши контактные данные, и мы свяжемся с вами для обсуждения аудита.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <p className="text-lg font-medium">Спасибо за заявку!</p>
            <p className="text-sm text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Имя и Фамилия *</Label>
              <Input
                id="fullName"
                placeholder="Иван Иванов"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="ivan@company.uz"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+998 90 123 45 67"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#2E1A47] hover:bg-[#2E1A47]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                "Отправить заявку"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

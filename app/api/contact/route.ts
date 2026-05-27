import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, pageUrl, localTime, timezone } = body

    // Validate required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      )
    }

    // Get IP address
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "Unknown"
    
    // Get location from IP using free API
    let location = "Unknown"
    try {
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`, {
        signal: AbortSignal.timeout(3000),
      })
      if (geoResponse.ok) {
        const geoData = await geoResponse.json()
        if (geoData.city && geoData.country_name) {
          location = `${geoData.city}, ${geoData.country_name}`
        } else if (geoData.country_name) {
          location = geoData.country_name
        }
      }
    } catch {
      // Silently fail if geolocation doesn't work
      location = "Не удалось определить"
    }

    // Get UTC time
    const now = new Date()
    const utcTime = now.toISOString().replace("T", " ").slice(0, 19) + " UTC"

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2E1A47;">Новый запрос с лендинга AVO Bank Audit</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Контактные данные</h3>
          <p><strong>Имя и Фамилия:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Телефон:</strong> <a href="tel:${phone.replace(/\s/g, "")}">${phone}</a></p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Техническая информация</h3>
          <p><strong>Локальное время пользователя:</strong> ${localTime || "Не определено"}</p>
          <p><strong>Часовой пояс:</strong> ${timezone || "Не определен"}</p>
          <p><strong>Время UTC:</strong> ${utcTime}</p>
          <p><strong>IP адрес:</strong> ${ip}</p>
          <p><strong>Локация:</strong> ${location}</p>
          <p><strong>Страница:</strong> <a href="${pageUrl}">${pageUrl}</a></p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          Это автоматическое письмо от формы на лендинге AVO Bank Digital Audit.
        </p>
      </div>
    `

    // Send email
    const { error } = await resend.emails.send({
      from: "AVO Audit Landing <onboarding@resend.dev>",
      to: "maksym@bandera.agency", // Временно - пока не верифицирован домен bartka.agency
      subject: `Запрос от ${fullName} - AVO Bank Audit`,
      html: emailHtml,
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Не удалось отправить письмо. Попробуйте позже." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Произошла ошибка при обработке запроса" },
      { status: 500 }
    )
  }
}

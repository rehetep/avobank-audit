import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Внешний Digital-Аудит AVO Bank Uzbekistan | Bartka Agency',
  description: 'Где AVO Bank может терять клиентов между рекламой, сайтом и приложением. Внешний digital-аудит от Bartka Agency: анализ сайта, рекламы, приложения, соцсетей и конкурентов.',
  keywords: ['AVO Bank', 'digital аудит', 'аудит банка', 'Узбекистан', 'fintech', 'маркетинг аудит', 'Bartka Agency', 'анализ конкурентов', 'UX аудит'],
  authors: [{ name: 'Bartka Agency', url: 'https://bartka.agency' }],
  creator: 'Bartka Agency',
  publisher: 'Bartka Agency',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Внешний Digital-Аудит AVO Bank Uzbekistan | Bartka Agency',
    description: 'Где AVO Bank может терять клиентов между рекламой, сайтом и приложением. Анализ 5 ключевых проблем и план действий на 90 дней.',
    siteName: 'Bartka Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Внешний Digital-Аудит AVO Bank Uzbekistan',
    description: 'Где AVO Bank может терять клиентов между рекламой, сайтом и приложением.',
    creator: '@bartkaagency',
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#2E1A47',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bartka Agency',
    description: 'Marketing agency for finance and fintech. Digital audit services for banks.',
    url: 'https://bartka.agency',
    serviceType: 'Digital Marketing Audit',
    areaServed: {
      '@type': 'Country',
      name: 'Uzbekistan',
    },
    provider: {
      '@type': 'Organization',
      name: 'Bartka Agency',
      email: 'welcome@bartka.agency',
    },
  }

  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="ru" className="bg-background">
      <head>
        {/* Google Tag Manager */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

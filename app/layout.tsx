import type { Metadata } from 'next'
import '@/app/ui/css/globals.css'
import { rubik } from '@/app/ui/fonst'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    default: 'SGI',
    template: '%s | SGI'
  },
  description: 'Sistema de Gestión Interna'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${rubik.className} min-h-dvh w-dvw bg-background`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

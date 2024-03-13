import type { Metadata } from 'next'
import '@/app/ui/css/globals.css'
import { rubik } from '@/app/ui/fonst'

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
      <body className={`${rubik.className} bg-background`}>{children}</body>
    </html>
  )
}

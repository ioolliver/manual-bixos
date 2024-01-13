import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'
import { SpeedInsights } from '@vercel/speed-insights/next'

const font = Poppins({ weight: ["500", "800", "900"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manual dos bixos 2024 - ETESP',
  description: 'Manual de sobrevivência para os bixos etespianos.',
  icons: "/etesp-icon.jpg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
          <div className="global-app-box">
            {children}
            <SpeedInsights />
          </div>
      </body>
    </html>
  )
}

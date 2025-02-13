import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'EquiParents',
  description: 'Organizador de Crianza Compartida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="fantasy">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



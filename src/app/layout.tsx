import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oligo eShop - Premium Electronics & Tech',
  description: 'Discover premium electronics, gadgets, and tech accessories at Oligo eShop. Quality products with fast shipping.',
  keywords: 'electronics, gadgets, tech, online shopping, ecommerce',
  authors: [{ name: 'Oligo eShop' }],
  openGraph: {
    title: 'Oligo eShop - Premium Electronics & Tech',
    description: 'Discover premium electronics, gadgets, and tech accessories at Oligo eShop.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        {children}
      </body>
    </html>
  )
}

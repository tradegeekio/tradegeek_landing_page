import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TradeGeek',
  description: 'TradeGeek helps auto wholesalers manage inventory, connect with buyers via SMS, and track deals from first contact to final sale.',
  keywords: 'wholesale vehicles, dealer management, car auction software, automotive messaging',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

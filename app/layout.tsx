import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PREMIUM Commercial - Real Estate Financing',
  description: 'Your Trusted Partner in Real Estate Investment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}

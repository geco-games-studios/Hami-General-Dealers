import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Hami General Dealers - Agricultural & Business Solutions',
  description: 'Leading provider of agricultural and business solutions through Hami General Dealers, Agrovert, Mifi, and Hami Farms.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

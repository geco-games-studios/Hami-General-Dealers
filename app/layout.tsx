import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Hami General Dealers - Agriculture, Microfinance & Motors',
  description: 'Hami General Dealers brings together Agrovert farm inputs, poultry and cattle production, Mifi daily loans, Hamiz Motors, IT, and media support.',
  icons: {
    icon: '/images/logo-hami.png',
    shortcut: '/images/logo-hami.png',
    apple: '/images/logo-hami.png',
  },
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

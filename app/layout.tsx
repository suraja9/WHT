import { Analytics } from '@vercel/analytics/next'
import { Lato, Montserrat } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'World Hunger Team | Food. Water. Dignity.',
  description: 'World Hunger Team equips people to grow food, water, and dignity through practical, sustainable systems.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${lato.variable} ${montserrat.variable} antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

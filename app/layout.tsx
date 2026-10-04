import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_URL = 'https://beef1casino.vercel.app'

const TITLE = 'Beef Casino официальный сайт — играть онлайн в слоты и рулетку с бонусами'
const DESCRIPTION =
  'Beef Casino — официальный сайт и рабочее зеркало. Играть онлайн в слоты, рулетку и карты с быстрыми выплатами. Биф Казино предлагает честные условия, бонусы новичкам и поддержку 24/7.'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0e3b2e" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content="Beef Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image" content={`${SITE_URL}/images/hero-table.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/images/hero-table.jpg`} />
      </head>
      <body className="x9k-body">{children}</body>
    </html>
  )
}

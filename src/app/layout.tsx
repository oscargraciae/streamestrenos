import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streamestrenos',
  description: 'Descubre los últimos lanzamientos de tus plataformas de streaming, Netflix, Amazon Prime Video, HBO Max, Disney+ y más en un solo lugar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('RootLayout')
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{'Últimos lanzamientos de tus plataformas de streaming'}</title>
        <meta name="description" content={'Descubre los últimos lanzamientos de tus plataformas de streaming, Netflix, Amazon Prime Video, HBO Max, Disney+ y más en un solo lugar.'} />

        <meta property="og:url"                content={'https://streamestrenos.com'} />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content={'Últimos lanzamientos de tus plataformas de streaming'} />
        <meta property="og:description"        content={'Descubre los últimos lanzamientos de Netflix, Amazon Prime Video, HBO Max, Disney+ y más en un solo lugar.'} />
        <meta property="og:image"              content={'/cover.png'} />

        <meta name="twitter:card" content="summary" />
        

      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

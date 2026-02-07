import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Alvaro Maldonado | Tech Lead & AI Strategist',
    template: '%s | Alvaro Maldonado',
  },
  description: 'Tech Lead & AI Strategist. Transformo ideas de negocio en productos que escalan de verdad. Experto en conectar la visión estratégica con soluciones tecnológicas de alto impacto.',
  keywords: [
    'Alvaro Maldonado',
    'Tech Lead',
    'AI Strategist',
    'AI Solutions Architect',
    'AI Agents',
    'Autonomous Agents',
    'LangGraph',
    'RAG',
    'LLMOps',
    'LangChain',
    'Solution Architecture',
    'Scalable Systems',
    'Generative AI',
    'Python',
    'Enterprise AI',
    'Technical Leadership',
    'Cloud Architecture'
  ],
  authors: [
    {
      name: 'Alvaro Maldonado',
      url: 'https://almapi.dev',
    },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Alvaro Maldonado | Tech Lead & AI Strategist',
    description: 'Tech Lead & AI Strategist. Transformo ideas de negocio en productos que escalan de verdad. Experto en conectar la visión estratégica con soluciones tecnológicas de alto impacto.',
    url: 'https://almapi.dev',
    siteName: 'almap[i]',
    images: [
      {
        url: 'https://almapi.dev/chatbot/profile.jpeg',
        width: 320,
        height: 320,
        alt: 'Profile picture of Alvaro Maldonado, a Tech Lead & AI Strategist.',
      },
      {
        url: 'https://almapi.dev/icon/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Logo of almap[i] - Portfolio of Alvaro Maldonado.',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon/logo.png', type: 'image/png' },
      { url: '/icon/logo.png', sizes: 'any' },
      { url: '/icon/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: 'icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://almapi.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon/logo.png" />
        <link rel="icon" href="/icon/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-9Q4C2Q448H" />
      </body>
    </html>
  )
}

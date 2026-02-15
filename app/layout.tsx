import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://almapi.dev'

export const metadata: Metadata = {
  title: {
    default: 'Alvaro Maldonado | Tech Lead & AI Strategist',
    template: '%s | Alvaro Maldonado',
  },
  description: 'Tech Lead & AI Strategist. Transformo ideas de negocio en productos que escalan. Experto en conectar visión estratégica con soluciones de alto impacto.',
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
  alternates: {
    canonical: 'https://almapi.dev',
  },
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
    description: 'Tech Lead & AI Strategist. Transformo ideas de negocio en productos que escalan. Experto en conectar visión estratégica con soluciones de alto impacto.',
    url: 'https://almapi.dev',
    siteName: 'almap[i]',
    images: [
      {
        url: '/banner.png',
        width: 1024,
        height: 1024,
        alt: 'Banner of almap[i] - Portfolio of Alvaro Maldonado.',
      },
      {
        url: '/logo.png',
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
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: 'any' },
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  metadataBase: new URL(baseUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/hero/Digital_Wireframe_Brain_Animation.mp4" as="video" type="video/mp4" />
        <link rel="preconnect" href="https://region1.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        {children}
        <GoogleAnalytics gaId="G-9Q4C2Q448H" />
      </body>
    </html>
  )
}

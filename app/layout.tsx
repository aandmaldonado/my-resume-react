import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'almap[i]',
    template: '%s | Álvaro Maldonado',
  },
  description: 'Álvaro Maldonado | Senior Software Engineer & AI-Powered Engineer',
  keywords: [
    'Álvaro Maldonado',
    'Senior Software Engineer',
    'AI Specialist',
    'Machine Learning Engineer',
    'Java Developer',
    'Spring Boot',
    'AWS Cloud',
    'DevOps Engineer',
    'Full Stack Developer',
    'Inteligencia Artificial',
    'Ciencia de Datos',
    'Desarrollo de Software',
    'Backend Development',
    'Cloud Architecture',
    'Software Architecture',
    'Microservices',
    'API Development',
    'Big Data',
    'Deep Learning',
    'Neural Networks'
  ],
  authors: [
    {
      name: 'Álvaro Maldonado',
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
    title: 'almap[i]',
    description: 'Álvaro Maldonado | Senior Software Engineer & AI-Powered Engineer',
    url: 'https://almapi.dev',
    siteName: 'almap[i]',
    images: [
      {
        url: 'https://almapi.dev/about/profile2.jpg',
        width: 320,
        height: 320,
        alt: 'Álvaro Maldonado - Senior Software Engineer & AI-Powered Engineer',
      },
      {
        url: 'https://almapi.dev/icon/logo.svg',
        width: 1200,
        height: 630,
        alt: 'almap[i] - Portfolio de Álvaro Maldonado',
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon/code.svg', type: 'image/svg+xml' },
      { url: 'icon/favicon.ico', sizes: 'any' },
      { url: 'icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        <link rel="icon" href="/icon/code.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
        <link rel="icon" href="/icon/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

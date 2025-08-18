import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Alvaro Maldonado | Product Engineer & AI',
    template: '%s | Alvaro Maldonado',
  },
  description: 'Portfolio of Alvaro Maldonado, a Senior Software Engineer and Product Engineer. Explore AI projects focused on solving complex business problems across diverse industries.',
  keywords: [
    'Alvaro Maldonado',
    'Product Engineer',
    'Senior Software Engineer',
    'AI Specialist',
    'Technical Leadership',
    'Software Architecture',
    'Artificial Intelligence',
    'Machine Learning',
    'Enterprise AI',
    'Java',
    'Python',
    'Spring Boot',
    'AWS',
    'Microservices'
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
    title: 'Alvaro Maldonado | Product Engineer & AI',
    description: 'Portfolio of a Senior Software Engineer and Product Engineer. Explore AI projects focused on solving complex business problems across diverse industries.',
    url: 'https://almapi.dev',
    siteName: 'almap[i]',
    images: [
      {
        url: 'https://almapi.dev/about/profile2.jpg',
        width: 320,
        height: 320,
        alt: 'Profile picture of Alvaro Maldonado, a Product Engineer and AI expert.',
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
      <body className={inter.className}>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}`}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}

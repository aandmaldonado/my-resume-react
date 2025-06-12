import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Álvaro Maldonado | Senior Software Engineer & AI Specialist',
    template: '%s | Álvaro Maldonado',
  },
  description: 'Senior Software Engineer especializado en IA y Machine Learning. Más de 10 años de experiencia en desarrollo Java, Spring Boot, AWS, y soluciones de inteligencia artificial. Expertos en DevOps y arquitectura de software.',
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
      url: 'https://www.almapi.dev',
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
  alternates: {
    canonical: 'https://www.almapi.dev',
    languages: {
      'es-ES': 'https://www.almapi.dev',
      'en-US': 'https://www.almapi.dev/en',
    },
  },
  openGraph: {
    title: 'Álvaro Maldonado | Senior Software Engineer & AI Specialist',
    description: 'Senior Software Engineer especializado en IA y Machine Learning. Más de 10 años de experiencia en desarrollo Java, Spring Boot, AWS, y soluciones de inteligencia artificial. Expertos en DevOps y arquitectura de software.',
    url: 'https://www.almapi.dev',
    siteName: 'almap[i]',
    images: [
      {
        url: 'https://www.almapi.dev/profile.jpeg',
        width: 320,
        height: 320,
        alt: 'Álvaro Maldonado - Senior Software Engineer & AI Specialist',
      },
      {
        url: 'https://www.almapi.dev/logo.svg',
        width: 1200,
        height: 630,
        alt: 'almap[i] - Portfolio de Álvaro Maldonado',
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Álvaro Maldonado | Senior Software Engineer & AI Specialist',
    description: 'Senior Software Engineer especializado en IA y Machine Learning. Más de 10 años de experiencia en desarrollo Java, Spring Boot, AWS, y soluciones de inteligencia artificial.',
    creator: '@tu_usuario_twitter',
    site: '@tu_usuario_twitter',
    images: ['https://www.almapi.dev/profile.jpeg'],
  },
  icons: {
    icon: [
      { url: '/code.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  metadataBase: new URL('https://www.almapi.dev'),
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-de-verificacion-yandex',
  },
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

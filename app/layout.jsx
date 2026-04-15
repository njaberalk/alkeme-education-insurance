import { Poppins } from 'next/font/google'
import './globals.css'
import ScrollToTop from './ScrollToTop'
import QuoteFormProvider from './QuoteFormProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://alkemeins.com/education'),
  title: {
    template: '%s | ALKEME Insurance Services',
    default: 'Educational Institution Insurance | ALKEME Insurance Services',
  },
  description: 'ALKEME Insurance Services provides specialized insurance for educational institutions including K-12 schools, colleges, universities, and childcare centers. Coverage for general liability, professional liability, abuse and molestation, and more.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ALKEME Insurance Services',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'ALKEME Insurance Services — Educational Institution Insurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Institution Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for schools, colleges, universities, and educational organizations across all 50 states.',
    images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=630&q=80'],
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
  alternates: {
    canonical: 'https://alkemeins.com/education/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    // Add your Google Search Console verification code here when ready
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
        <ScrollToTop />
        <QuoteFormProvider />
        {children}
      </body>
    </html>
  )
}

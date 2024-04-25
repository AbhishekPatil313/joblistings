import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WorkWave',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <div className="container">
                <Navbar />
                {children}
                <Footer />
          </div>
      </body>
    </html>
  )
}
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/siteComponents/header'
import Headers from '@/siteComponents/header'
import Providers from '@/siteComponents/provider'
import Footer from '@/siteComponents/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Headers />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

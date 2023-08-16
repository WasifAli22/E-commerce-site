import Providers from '@/views/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/views/layout/footer'
import Headers from '@/views/layout/header'
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

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/tailwind.css'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
// Page title
export const metadata: Metadata = {
  title: 'Where in the world?',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
      <SiteHeader />
      {children}
    </body>
  </html>
)

export default RootLayout

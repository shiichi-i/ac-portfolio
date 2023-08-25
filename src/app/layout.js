import './globals.css'
import { Raleway, Maven_Pro } from 'next/font/google'
import Navbar from '@/components/Navbar'

const raleway = Raleway({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal', 'italic']
})

export const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Andrea Christela',
  description: 'Developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

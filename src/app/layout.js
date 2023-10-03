'use client'
import './globals.css';
import { Raleway, Maven_Pro } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SNavbar from '@/components/SNavbar';
import SFooter from '@/components/SFooter';
import { usePathname } from 'next/navigation';

const raleway = Raleway({
   subsets: ['latin'],
   weight: ['400', '700'],
   style: ['normal', 'italic']
})

export const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <head>
        <title>Andrea Christela</title>
        <meta name='Andrea Christela' content='Developer portfolio' />
      </head>
      <body className={raleway.className}>
        {pathname.indexOf("/services") === 0 ? <SNavbar /> : <Navbar />}
        <div className="min-h-[70px] md:min-h-0" />
        {children}
        {pathname.indexOf("/services") === 0 ? <SFooter /> : <Footer className="z-20" />}
        
      </body>
    </html>
  )
}

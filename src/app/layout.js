import './globals.css';
import { Raleway, Maven_Pro } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  return (
    <html lang="en">
      <head>
        <title>Andrea Christela</title>
        <meta name='Andrea Christela' content='Developer portfolio' />
      </head>
      <body className={raleway.className}>
        <Navbar />
        <div className="min-h-[50px] md:min-h-0" />
        {children}
        <Footer className="z-20" />
      </body>
    </html>
  )
}

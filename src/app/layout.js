import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import styles from './layout.module.css'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      
      <body className={styles.layout}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

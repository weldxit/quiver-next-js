import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import styles from './layout.module.css'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

export const metadata = {
  title: 'The Quiver',
  description: `We are Not for Anyone and No One will be there behind us, We are sole and one standing for Justice !! `,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
       <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className={styles.layout}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

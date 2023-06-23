import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
// import { motion, AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test next',
  description: 'For comparering react and next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <AnimatePresence>
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div style={{ display: "flex", gap: "20px", padding: "20px", color: "teal", fontSize: "30" }}>
            <div><Link href="/">home </Link></div>
            <div><Link href="/about">about </Link></div>
          </div>
          {children}
          <div style={{ display: "flex", gap: "20px", padding: "20px", color: "GrayText", fontSize: "30", backgroundColor: "teal" }}>
            copyRight @mishota
          </div>
        </div>
      </body>
    </html>
    // </AnimatePresence>
  )
}

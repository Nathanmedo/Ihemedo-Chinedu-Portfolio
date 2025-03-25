import "@/styles/globals.css"
import { Inter } from "next/font/google"
import React from "react" // Import React
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Toaster richColors position="bottom-right"/>
      </body>
    </html>
  )
}


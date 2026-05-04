import "@/styles/globals.css"
import { Bricolage_Grotesque } from "next/font/google"
import React from "react" // Import React
import { Toaster } from "sonner"

const bricolage = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"] })

export const metadata = {
  title : {
    default: "Nathanmedo_devs",
    template: '%s | Software Engineer'
  },
  description: "Software developer crafting fast, scalable, and user-focused web experiences. I turn ideas into clean, functional products with real-world impact."
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>{children}
        <Toaster richColors position="bottom-right"/>
      </body>
    </html>
  )
}


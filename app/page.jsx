'use client'

import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Story from "./components/story"
import Navbar from "./components/Navbar"
import { useActiveSection } from "@/utils/hooks/useActiveSection"
import { sections } from "@/constants"

export const metadata = {
  title : {
    default: "Nathanmedo_devs",
    template: '%s | Software Engineer'
  },
  description: "Software developer crafting fast, scalable, and user-focused web experiences. I turn ideas into clean, functional products with real-world impact."
}

export default function Page() {
  const active = useActiveSection(sections)

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero active={active} />
      <Story active={active} />
      <Gallery active={active}/>
      <Portfolio active={active} />
      <Contact active={active}/>
      <Footer />
    </main>
  )
}


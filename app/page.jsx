"use client"

import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Story from "./components/story"
import Navbar from "./components/Navbar"
import { useActiveSection } from "@/utils/hooks/useActiveSection"
import { sections } from "@/constants"



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


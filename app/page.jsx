import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Story from "./components/story"
import Navbar from "./components/Navbar"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Story />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}


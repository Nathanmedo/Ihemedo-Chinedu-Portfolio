export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Ihemedo Chinedu Nathan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/gentle_nathan_?igsh=aHlqNjd1aGtiMjFk&utm_source=qr" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://x.com/nathan_medo?s=21" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/chinedu-ihemedo-2307a4284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


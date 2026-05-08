import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, TIKTOK, TWITTER } from "@/constants";

export default function Footer() {
  let date = new Date();


  return (
    <footer className="relative overflow-hidden bg-[#efeee8] text-[#111111] px-6 md:px-12 py-16">
      

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12  border-neutral-400">
          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h3>

            <ul data-type="list" className="space-y-2 text-sm text-neutral-700">
              <li>
                <Link  href="#hero">Home</Link>
              </li>
              <li>
                <Link href="#story">About</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#works">Works</Link>
              </li>
              <li>
                <Link className="pointer-events-none opacity-40" href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">
              Socials
            </h3>

            <ul data-type="list" className="space-y-2 text-sm text-neutral-700">
              <li>
                <a href={LINKEDIN}>LinkedIn</a>
              </li>
              <li>
                <a href={TIKTOK}>Tiktok</a>
              </li>
              <li>
                <a href={INSTAGRAM}>Instagram</a>
              </li>
              <li>
                <a href={FACEBOOK}>Facebook</a>
              </li>
              <li>
                <a href={GITHUB}>GitHub</a>
              </li>
              <li>
                <a href={TWITTER}>Twitter</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">
              Resources
            </h3>

            <ul data-type="list" className="space-y-2 text-sm text-neutral-700">
              <li>
                <a href="https://t.me/nathanmedodevs">Join My Telegram</a>
              </li>
              <li>
                <a href="https://github.com/Nathanmedo/learn-rust.git ">Learn Rust</a>
              </li>
              <li>
                <a className="pointer-events-none opacity-40" href="#">Start Coding Young(Coming Soon!)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-8 md:gap-14 mt-10 md:mt-20">
          {/* Brand */}
          <div className="leading-none">
            <p className="text-5xl md:text-6xl font-black">© 2026</p>

            <p className="text-5xl md:text-6xl font-black ">NM_devs</p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 md:items-end">
            {/* Time */}
            <div className="flex flex-row items-end gap-2">
              <span className="uppercase text-xs  tracking-widest  text-neutral-500">
                Local Time
              </span>

              <span className="text-sm text-neutral-700">{date.toLocaleTimeString()}</span>
            </div>

            {/* Newsletter */}
            <div className="min-w-[300px]">
              <p className="uppercase text-xs tracking-widest mb-2 text-neutral-500">
                Newsletter
              </p>

              <div className="flex items-center border-b border-neutral-500 pb-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none text-sm w-full placeholder:text-neutral-500"
                />

                <button className="text-sm uppercase tracking-wide hover:opacity-60 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="border-t border-zinc-800 bg-black py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//           <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Nathanmedo_devs. All rights reserved.</p>
//           <div className="flex gap-6">
//             <a href="https://www.instagram.com/nathanmedo_devs?igsh=MW03aWg2N2RpY3R3Mw%3D%3D&utm_source=qr" className="text-gray-400 hover:text-white">
//               <Instagram />
//             </a>
//             <a href="https://x.com/nathan_medo?s=21" className="text-gray-400 hover:text-white">
//               <Twitter />
//             </a>
//             <a href="https://www.linkedin.com/in/chinedu-ihemedo-2307a4284" className="text-gray-400 hover:text-white">
//               <Linkedin />
//             </a>
//             <a href="https://www.tiktok.com/@nathanmedo_devs?_r=1&_t=ZS-965I4iASiXd" className="text-gray-400 hover:text-white">
//               <FaTiktok size={24} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

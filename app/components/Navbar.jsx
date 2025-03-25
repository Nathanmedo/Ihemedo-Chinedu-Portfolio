import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});


export default function Navbar() {
  return (
    <nav className={` z-[9999] right-0 p-4 absolute top-0 ${poppins.className}`}>
      <div className="container mx-auto">
        <ul className="flex justify-end space-x-6">
          <li>
            <a href="#story" className="text-white hover:text-gray-400">
              Story
            </a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#works" className="text-white hover:text-gray-400">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


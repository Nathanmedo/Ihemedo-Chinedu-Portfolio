"use client"

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "#story", label: "Story" },
    { href: "#skills", label: "Skills" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`z-[9999] right-0 p-4 absolute top-0 w-full ${poppins.className}`}>
        <div className="container mx-auto">
          <ul className="hidden md:flex justify-end space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white hover:text-gray-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden absolute border-white border-2 p-1 rounded-md top-4 right-4 z-[10000] focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <MenuIcon className="w-8 h-8 text-white" />
          </button>
        </div>
      </nav>

      
      {/* Sidenav for mobile with animation */}
      <div
        className={`fixed inset-0 z-[99999] md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } bg-black/40`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
          <aside
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[100000] flex flex-col p-8 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col mt-12 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-black text-lg font-medium hover:text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
    </>
  );
}


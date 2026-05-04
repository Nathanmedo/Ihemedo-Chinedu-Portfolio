"use client";

import React, { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";



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
      <nav
        className={`z-[9999] right-0 p-4 absolute top-0 w-full`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#contact">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/assets/images/portfolio-logo.png"
                alt="Nathanmedo_devs_Logo"
                width={50}
                height={50}
                className="cursor-pointer "
              />
            </motion.div>
            <motion.div
              className={`uppercase font-bold tracking-tighter hidden md:block`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nathanmedo_devs
            </motion.div>
          </Link>
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
        className={`fixed inset-0 z-[99999] md:hidden transition-opacity duration-300 ${open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          } bg-black/40`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <aside
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-[100000] flex flex-col p-8 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-6 text-2xl text-black focus:outline-none"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex flex-col mt-12 items-center space-y-10">
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

"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const technologies = [
    {
      name: "Next.js",
      color: "from-black to-gray-800",
      textColor: "text-white",
      border: "border-gray-700",
      icon:'/assets/tech/next.png'
    },
    {
      name: "React",
      color: "from-blue-400 to-blue-600",
      textColor: "text-white",
      border: "border-blue-300",
      icon:'/assets/tech/reactjs.png'
    },
    {
      name: "TypeScript",
      color: "from-blue-600 to-blue-800",
      textColor: "text-white",
      border: "border-blue-500",
      icon:'/assets/tech/typescript.png'
    },
    {
      name: "JavaScript",
      color: "from-yellow-300 to-yellow-500",
      textColor: "text-black",
      border: "border-yellow-200",
      icon:'/assets/tech/javaScript.png'
    },
    {
      name: "HTML",
      color: "from-orange-500 to-red-600",
      textColor: "text-white",
      border: "border-orange-400",
      icon:'/assets/tech/html.png'
    },
    {
      name: "CSS",
      color: "from-blue-400 to-blue-600",
      textColor: "text-white",
      border: "border-blue-300",
      icon:'/assets/tech/css.png'
    },
    {
      name: "Tailwind",
      color: "from-blue-600 to-blue-800",
      textColor: "text-white",
      border: "border-blue-400",
      icon:'/assets/tech/tailwind.png'
    },
    {
      name: "Node.js",
      color: "from-green-500 to-green-700",
      textColor: "text-white",
      border: "border-green-400",
      icon:'/assets/tech/nodejs.png'
    },
    {
      name: "MongoDB",
      color: "from-green-600 to-green-800",
      textColor: "text-white",
      border: "border-green-500",
      icon:'/assets/tech/mongodb.png'
    },
    {
      name: "Docker",
      color: "from-blue-500 to-blue-700",
      textColor: "text-white",
      border: "border-blue-400",
      icon:'/assets/tech/docker.png'
    },
    {
      name: "Git",
      color: "from-orange-500 to-orange-700",
      textColor: "text-white",
      border: "border-orange-400",
      icon:'/assets/tech/git.png'
    },
    {
      name: "Figma",
      color: "from-purple-500 to-purple-700",
      textColor: "text-white",
      border: "border-purple-400",
      icon:'/assets/tech/figma.png'
    },
  ]

  return (
    <section
    id="skills" 
    className={`relative py-20 bg-black ${poppins.className}`}>
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-wider uppercase sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technologies
        </motion.h2>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-lg border ${tech.border} aspect-square flex items-center justify-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img src={tech?.icon} alt={tech.name} className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
              <div
              className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-90`}></div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-white/10 rounded-full">
                  {/* This would be where the actual logo goes */}
                  <span className={`text-xl font-bold ${tech.textColor}`}>{tech.name.charAt(0)}</span>
                </div>
                <h3 className={`text-lg font-semibold ${tech.textColor}`}>{tech.name}</h3>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


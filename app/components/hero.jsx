"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { sections } from "@/constants";


export default function Hero({ active }) {
  console.log(active)
  const canvasRef = useRef(null);


  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    class Particle {
      x
      y
      size
      speedX
      speedY

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id={sections[0]} className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-6xl relative z-10 font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          IHEMEDO CHINEDU
          {active === sections[0] && <>
            <motion.span initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "105%" }}
              transition={{ duration: 0.8, delay: 0.5 }} className="absolute -z-[10]   inset-0 left-[50%] transform -translate-x-[50%] bg-[#e45c22]/20"></motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-[5px] -left-[28px] h-4 w-4 rounded-full bg-white"></motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -left-[22px] h-full w-1  bg-white"></motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, origin: "bottom" }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -right-[22px] h-full w-1  bg-white"></motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-[5px] -right-[28px] h-4 w-4 rounded-full bg-white"></motion.span>
          </>
          }
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-gray-200 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer for <strong>web and mobile.</strong>
        </motion.p>
      </div>
    </section>
  )
}


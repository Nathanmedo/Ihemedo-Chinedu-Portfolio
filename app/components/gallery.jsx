"use client";

import { motion } from "framer-motion";
import { Fragment, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { Poppins, Nanum_Pen_Script } from "next/font/google";
import { sections } from "@/constants";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

const nanum_pen_script = Nanum_Pen_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Gallery({ active }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const technologies = [
    {
      name: "Next.js",
      color: "from-black to-gray-800",
      textColor: "text-white",
      border: "border-gray-700",
      icon: "/nextjs_icon_dark.svg",
      description:
        "A React framework for server-side rendering and static site generation.",
    },
    {
      name: "Nest.js",
      color: "from-pink-500 to-white",
      textColor: "text-white",
      border: "border-gray-700",
      icon: "/nestjs.svg",
      description:
        "A progressive Node.js framework for building efficient and scalable server-side applications.",
    },
    {
      name: "React",
      color: "from-blue-400 to-blue-600",
      textColor: "text-white",
      border: "border-blue-300",
      icon: "/assets/tech/reactjs.png",
      description:
        "A JavaScript library for building user interfaces with reusable components.",
    },
    {
      name: "TypeScript",
      color: "from-blue-600 to-blue-800",
      textColor: "text-white",
      border: "border-blue-500",
      icon: "/typescript.svg",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      name: "JavaScript",
      color: "from-yellow-300 to-yellow-500",
      textColor: "text-black",
      border: "border-yellow-200",
      icon: "/assets/tech/javascript.png",
      description:
        "A high-level programming language for web development and beyond.",
    },
    {
      name: "HTML",
      color: "from-orange-500 to-red-600",
      textColor: "text-white",
      border: "border-orange-400",
      icon: "/assets/tech/html.png",
      description:
        "The standard markup language for creating web pages and web applications.",
    },
    {
      name: "CSS",
      color: "from-blue-400 to-blue-600",
      textColor: "text-white",
      border: "border-blue-300",
      icon: "/assets/tech/css.png",
      description:
        "A style sheet language used for describing the presentation of a document.",
    },
    {
      name: "Tailwind",
      color: "from-blue-600 to-blue-800",
      textColor: "text-white",
      border: "border-blue-400",
      icon: "/assets/tech/tailwind.png",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      name: "Node.js",
      color: "from-green-500 to-green-700",
      textColor: "text-white",
      border: "border-green-400",
      icon: "/assets/tech/nodejs.png",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    },
    {
      name: "MongoDB",
      color: "from-green-600 to-green-800",
      textColor: "text-white",
      border: "border-green-500",
      icon: "/assets/tech/mongodb.png",
      description:
        "A NoSQL database program using JSON-like documents with optional schemas.",
    },
    {
      name: "Docker",
      color: "from-blue-500 to-blue-700",
      textColor: "text-white",
      border: "border-blue-400",
      icon: "/assets/tech/docker.png",
      description:
        "A platform for developing, shipping, and running applications in containers.",
    },
    {
      name: "Git",
      color: "from-orange-500 to-orange-700",
      textColor: "text-white",
      border: "border-orange-400",
      icon: "/assets/tech/git.png",
      description:
        "A distributed version control system for tracking changes in source code.",
    },
    {
      name: "Figma",
      color: "from-purple-500 to-purple-700",
      textColor: "text-white",
      border: "border-purple-400",
      icon: "/assets/tech/figma.png",
      description:
        "A vector graphics editor and prototyping tool for UI/UX design.",
    },
  ];

  return (
    <section
      id="skills"
      className={`relative py-20 bg-black ${poppins.className}`}
    >
      <div
        ref={ref}
        className="container mx-auto px-4 flex flex-col items-center"
      >
        <motion.h2
          className="mb-12 text-center text-3xl z-10 flex items-center justify-center  max-w-[50%] font-bold tracking-wider relative uppercase sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technologies
          {active === sections[2] && (
            <motion.img
              initial={{ scale: 0, rotate: 0 }}
              animate={controls}
              whileInView="enter"
              viewport={{ once: true }}
              variants={{
                enter: {
                  scale: 1,
                  rotate: 360,
                  transition: {
                    duration: 0.6,
                    delay: 0.5,
                    type: "spring",
                  },
                },
                idle: {
                  y: [0, -8, 4, -12, 0],
                  x: [0, 4, -3, 2, 0],
                  transition: {
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                },
              }}
              onAnimationComplete={() => {
                controls.start("idle");
              }}
              className={`absolute size-[100px] z-[-1] right-[-70px]`}
              src="/assets/images/globe.png"
              alt="deco"
            />
          )}
        </motion.h2>
        <div className="grid gap-6 w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative">
              <div className="group-hover:opacity-100 flex-col items-center opacity-0 absolute z-10 top-[-120px]">
                <div
                  className={`${nanum_pen_script.className} -mb-9 text-md w-[250px]`}
                >
                  {tech.description}
                </div>
                <img
                  src="/assets/images/gallery-arrow.png"
                  className="size-40"
                  alt="desc-arrow"
                />
              </div>
              <motion.div
                className={` relative overflow-hidden rounded-lg border ${tech.border} aspect-square flex items-center justify-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <img
                  src={tech?.icon}
                  alt={tech.name}
                  className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-90`}
                ></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center bg-white/10 rounded-full">
                    {/* This would be where the actual logo goes */}
                    <span className={`text-xl font-bold ${tech.textColor}`}>
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className={`text-lg font-semibold ${tech.textColor}`}>
                    {tech.name}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

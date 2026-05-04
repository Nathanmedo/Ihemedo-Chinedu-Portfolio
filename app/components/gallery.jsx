"use client";

import { motion } from "framer-motion";
import { Fragment, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import { Nanum_Pen_Script } from "next/font/google";
import { sections } from "@/constants";
import { technologies } from "@/constants";

const nanum_pen_script = Nanum_Pen_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Gallery({ active }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  

  return (
    <section
      id="skills"
      className={`relative py-20 bg-black`}
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

"use client";

import { sections } from "@/constants";
import { useActiveSection } from "@/utils/hooks/useActiveSection";
import { easeInOut, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";



export default function Story({ active }) {
  return (
    <section
      id={sections[1]}
      className={` py-24 bg-zinc-950 relative`}
    >
      {Array.from({ length: 4 }, (_, i) => {
        const size = Math.random() * 400 + 100;
        return (
          <motion.img
            key={i}
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className={`absolute opacity-40`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${Math.random() * 700 + 100}px`,
              top: `${Math.random() * 700 + 100}px`,
            }}
            src="/assets/images/star.png"
            alt="deco"
          />
        );
      })}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl z-[10] font-bold tracking-tighter relative mb-6">
              My Story
              {active === sections[1] && (
                <motion.img
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className={`absolute size-[300px] left-[-80px] top-[-120px]`}
                  src="/assets/images/circle.png"
                  alt="deco"
                />
              )}
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate software engineer with expertise in web and
                mobile development. My journey began with a curiosity about how
                digital experiences are built, which led me to dive deep into
                the world of programming.
              </p>
              <p className="inline">With several years of experience,</p>{" "}
              <p className={`highlight ${active == sections[1] && "active"}  inline`}>
                I've had the opportunity to work on diverse projects ranging
                from responsive web applications to scalable backend systems.
              </p>
              <p>
                {" "}
                I believe in writing clean, maintainable code and creating
                intuitive user experiences.
              </p>
              <p>
                My approach combines technical expertise with creative
                problem-solving. I'm constantly learning and adapting to new
                technologies to deliver modern, efficient solutions that meet
                both user needs and business goals.
              </p>
            </div>
            <div className="flex mt-8 gap-2 flex-wrap relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://www.linkedin.com/in/chinedu-ihemedo-2307a4284"
                  className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Let's Connect <ArrowUpRight/>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <a
                  href="/assets/files/my_resume_2026.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 border border-black text-black hover:bg-inherit hover:text-white transition-colors duration-300 bg-white"
                >
                  Download Resume
                </a>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute right-[-100px] transform  md:rotate-0 w-[120px] md:-top-[60px] -top-[65px] "
              >
                <img
                  src="/assets/images/arrow.png"
                  alt="arrow"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <div className="absolute image-ratio inset-0 bg-gradient-to-br from-[#e45c22]/20 to-[#fffff]/20 z-10"></div>
              <img
                src="/assets/images/ihemedo chinedu.jpeg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#e45c22] to-[#5f2208] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-white rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

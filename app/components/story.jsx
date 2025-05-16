"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});
export default function Story() {
  return (
    <section 
    id="story"
    className={`${poppins.className} py-24 bg-zinc-900`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tighter mb-6">
              My Story
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate software engineer with expertise in web and
                mobile development. My journey began with a curiosity about how
                digital experiences are built, which led me to dive deep into
                the world of programming.
              </p>
              <p>
                With several years of experience, I've had the opportunity to
                work on diverse projects ranging from responsive web
                applications to scalable backend systems. I believe in writing
                clean, maintainable code and creating intuitive user
                experiences.
              </p>
              <p>
                My approach combines technical expertise with creative
                problem-solving. I'm constantly learning and adapting to new
                technologies to deliver modern, efficient solutions that meet
                both user needs and business goals.
              </p>
            </div>
            <div className="flex mt-8 gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://www.linkedin.com/in/chinedu-ihemedo-2307a4284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Let's Connect
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href="/assets/files/Ihemedo_Chinedu_Resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 border border-black text-black hover:bg-inherit hover:text-white transition-colors duration-300 bg-white"
                >
                  Download Resume
                </a>
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
              <div className="absolute image-ratio inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
              <img
                src="/assets/images/portfolio-main-image.jpeg"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-white rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

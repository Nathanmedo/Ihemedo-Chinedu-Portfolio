"use client";

import { motion } from "framer-motion";
import { companies } from "@/constants";
import { cn } from "@/lib/utils";
import { sections } from "@/constants";

export default function Companies({ active }) {
  return (
    <section
      id="companies"
      className="relative overflow-hidden py-24 bg-zinc-900"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-3 uppercase tracking-[0.35em]  text-sm">
            PROFESSIONAL EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold text-white">
            Companies I've Worked With
          </h2>

          <p className="mt-5 text-zinc-400 leading-8">
            Throughout my journey as a developer, I've collaborated with
            organizations to build digital products, solve business problems,
            and create meaningful user experiences.
          </p>
        </motion.div>

        {/* Companies */}

        <div className="grid gap-8 md:grid-cols-3">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.15,
                type: "spring",
                stiffness: 220,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl"
            >
              {/* Glow */}

              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition duration-500 ",
                  active == sections[6] && "opacity-100",
                )}
              >
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#e45c22]/20 blur-3xl" />
              </div>

              <div className="relative p-10">
                {/* Logo */}

                <div className="flex h-28 items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className={cn(
                      "max-h-14 max-w-[170px] object-contain grayscale opacity-70 transition-all duration-500",
                      active == sections[6] && "grayscale-0 opacity-100 scale-105",
                    )}
                  />
                </div>

                {/* Divider */}

                <div className="mx-auto my-6 h-px w-20 bg-zinc-700 group-hover:bg-[#e45c22] transition-colors duration-300" />

                {/* Company */}

                <h3 className="text-center text-xl font-semibold text-white">
                  {company.name}
                </h3>

                <p className="mt-2 text-center text-sm tracking-wide text-zinc-400">
                  {company.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

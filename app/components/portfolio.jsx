"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { defaultWorks, sections } from "@/constants";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export default function Portfolio({active}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const ref = useRef(null);
  const textInView = useInView(ref, { once: true });
  const categories = [
    "all",
    "Ecommerce-Projects",
    "Productivity-tools",
    "Frontend-Only",
    "Backend-API",
    "Experimental/UI Showcase",
    "Foundational-Projects",
  ];

  const [works, setWorks] = useState(defaultWorks);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/portfolio");
        let data = await response.json();
        console.log(data);
        data = data.map((item) => ({
          id: item?._id,
          title: item?.name,
          category: "all",
          image: item?.imageUrl,
          year: item?.yearCreated,
          url: item?.htmlUrl,
          details: item?.description || "No description available",
        }));
        setWorks((prev) => [...prev, ...data]);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProjects();

    return () => setWorks(defaultWorks);
  }, []);

  const filteredWorks = works.filter((work, index, self) => {
    if (selectedCategory === "all") {
      return index === self.findIndex((w) => w.title === work.title);
    }
    return work.category === selectedCategory;
  });

  return (
    <section id="works" className={`bg-black py-20 ${poppins.className}`}>
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center relative text-3xl z-10 font-bold tracking-wider uppercase sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={textInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Works
          {active === sections[3] && (
            <motion.img
              initial={{ rotate: 0, scale:0 }}
              whileInView={{ rotate: 360, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className={`absolute size-[400px] z-[-1]  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}
              src="/assets/images/work confetti.png"
              alt="deco"
            />
          )}
        </motion.h2>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm cursor-pointer capitalize text-accent-foreground ${
                selectedCategory === category && "text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link href={work.url}>
                  <Card className="overflow-hidden bg-zinc-900">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image}
                          alt={work.title}
                          onError={(e) => {
                            e.currentTarget.src =
                              "/assets/images/No Image placeholder.svg";
                          }}
                          className="w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100">
                          <h3 className="  text-white capitalize tracking-wider text-sm">
                            {work.title}
                          </h3>
                          <p className="mt-[4px] text-sm text-gray-300">
                            {work.year}
                          </p>
                          <p className="mt-2 mx-4 text-center text-sm text-gray-300">
                            {work.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="lg:hidden mt-2 ">
                    <div className="flex flex-col items-center justify-center bg-black/60">
                      <h3 className="  text-white font-bold uppercase text-[16px] tracking-wider text-sm">
                        {work.title}
                      </h3>
                      <p className="mt-[2px] text-sm font-semibold text-gray-300">
                        {work.year}
                      </p>
                      <p className="mt-1 mx-4 text-center text-sm text-gray-300">
                        {work.details}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

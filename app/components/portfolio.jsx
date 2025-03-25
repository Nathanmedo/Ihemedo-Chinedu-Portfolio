"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Poppins } from "next/font/google";
import Link from "next/link";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});


export default function Portfolio() {
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

  const works = [
    {
      id: 1,
      title: "Rehab's store",
      category: "Ecommerce-Projects",
      image: "/assets/images/Ecommerce-frontend.png",
      year: "2022",
      url:"https://nathanmedo.github.io/E-commerce-Frontend",
      details:
        "This is a react app basically showcasing a cloth store. It is built with React and TaiiwindCSS",
    },
    {
      id: 2,
      title: "Independent Chemicals",
      category: "Ecommerce-Projects",
      image: "/assets/images/independentchem.png",
      year: "2024",
      url:"https://independentchementerprise.vercel.app",
      details:
        "This is an Ecommerce Store that sells Items. It is built with NextJs and wix API",
    },
    {
      id: 3,
      title: "Kanban App",
      category: "Productivity-tools",
      image: "/assets/images/kanban-app.png",
      year: "2024",
      url:"https://nathanmedo.github.io/kanban-app",
      details:
        "This is a Kanban App that helps you manage your tasks. It is built with React and TailwindCSS",
    },
    {
      id: 4,
      title: "Grocery-List App",
      category: "Productivity-tools",
      image: "/assets/images/todo-list.png",
      year: "2023",
      url:"https://nathanmedo.github.io/Todo-List",
      details:
        "This is a Grocery List App that helps you manage your groceries. It is built with React and TailwindCSS",
    },
    {
      id: 5,
      title: "Slider Effect Homepage",
      category: "Frontend-Only",
      image: "/assets/images/Slider-Effect.png",
      year: "2024",
      url:"https://nathanmedo.github.io/slider-effect",
      details:
        "This is an Early UI work . It is built with Html, CSS and Javascript.",
    },
    {
      id: 10,
      title: "Jidseg Company",
      category: "Frontend-Only",
      image: "/assets/images/Jidseg-frontend.png",
      year: "2024",
      url:"https://nathanmedo.github.io/company-prototype",
      details:
        "This is a  that serves job data to a frontend application. It is built with Html, CSS and Javascript.",
    },
    {
      id: 11,
      title: "NodeJs Job API",
      category: "Backend-API",
      image: "/assets/images/nodeapi.png",
      url: "https://github.com/Nathanmedo/node-js",
      year: "2024",
      details:
        "This is a NodeJs API that serves job data to a frontend application. It is built with ExpressJs and MongoDB.",
    },
    {
      id: 7,
      title: "Grocery-List App",
      category: "Foundational-Projects",
      image: "/assets/images/todo-list.png",
      year: "2023",
      url:"https://nathanmedo.github.io/Todo-List",
      details:
        "This is a Grocery List App that helps you manage your groceries. It is built with React and TailwindCSS",
    },
    {
      id: 8,
      title: "Slider Effect Homepage",
      category: "Foundational-Projects",
      image: "/assets/images/Slider-Effect.png",
      year: "2022",
      url:"https://nathanmedo.github.io/slider-effect",
      details:
        "This is an Early UI work . It is built with Html, CSS and Javascript.",
    },
    {
      id: 9,
      title: "Slider Effect Homepage",
      category: "Experimental/UI Showcase",
      image: "/assets/images/Slider-Effect.png",
      year: "2022",
      url:"https://nathanmedo.github.io/slider-effect",
      details:
        "This is an Early UI work . It is built with Html, CSS and Javascript.",
    },
    {
      id: 6,
      title: "ICN-web",
      category: "Experimental/UI Showcase",
      image: "/assets/images/icn-web.png",
      year: "2025",
      url:"https://icnweb.vercel.app",
      details:
        "This is a UI work that focuses on promoting a companies product. It is built with NextJS, TaiwindCSS, gsap, framer-motion etc.",
    },
  ];

  const filteredWorks = works.filter((work, index, self) => {
    if (selectedCategory === "all") {
      return index === self.findIndex((w) => w.title === work.title);
    }
    return work.category === selectedCategory;
  });

  return (
  <section
  id="works"
   className={`bg-black py-20 ${poppins.className}`}>
      <div
      ref={ref}
       className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-wider uppercase sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={textInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Works
        </motion.h2>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
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
                <Link
                href={work.url}
                >
                  <Card className="overflow-hidden bg-zinc-900">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

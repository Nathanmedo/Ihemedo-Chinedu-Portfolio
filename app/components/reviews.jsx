"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { reviews } from "@/constants";
import Image from "next/image";

export default function ReviewsSection({ active }) {
  const scrollRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowLeft(scrollLeft > 10);

    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScrollPosition();

    const container = scrollRef.current;

    if (!container) return;

    container.addEventListener("scroll", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-28 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
            Our Reviews
          </p>

          <h2 className="text-5xl text-neutral-400 md:text-7xl  font-light tracking-tight">
            What Our{" "}
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-white font-normal  relative"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={isInView ? { width: "250px" } : { width: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 h-[4px] w-[250px] bg-white"
              ></motion.span>
              Clients
            </motion.div>{" "}
            Say
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className={`flex absolute left-[-28px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border bg-neutral-400  backdrop-blur-sm items-center justify-center transition-all duration-300 hover:bg-black hover:text-white ${
              showLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ArrowLeft size={20} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className={`flex absolute right-[-28px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border bg-neutral-400 backdrop-blur-sm items-center justify-center transition-all duration-300 hover:bg-black hover:text-white ${
              showRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ArrowRight size={20} />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: 20, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[360px] max-w-[360px] bg-zinc-900 rounded-[2rem] p-8 flex flex-col justify-between"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-12">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full relative border-gray-300 border-2 flex items-center overflow-hidden justify-center text-lg font-semibold">
                    {review.src ? (
                      <Image
                        alt="review-profile"
                        src={
                          review.src
                        }
                        width={110}
                        height={110}
                        className="object-cover"
                      />
                    ) : (
                      review.name.charAt(0)
                    )}
                  </div>

                  {/* Rating */}
                  <div className="px-5 py-3 border border-neutral-300 rounded-full text-sm">
                    &#11088; {review.rating}
                  </div>
                </div>

                {/* Quote */}
                <div>
                  <Quote
                    size={30}
                    className="text-blue-400 fill-blue-400 mb-4"
                  />

                  <p className="text-4xl leading-[1.05] tracking-tight font-light">
                    {review.review}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-4 border-l border-neutral-300 pl-4">
                  <p className="font-medium text-lg">{review.name}</p>

                  <p className="text-sm text-neutral-500 mt-1">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

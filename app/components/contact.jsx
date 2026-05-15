"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sections } from "@/constants";
import { ArrowUpRight } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact({ active }) {
  const [submitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);

    setIsSubmitting(true);
    try {
      const response = await fetch("https://getform.io/f/bnlqjkzb", {
        //place your own form endpoint here, DO NOT USE MINE.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      // Log the created or retrieved label
      console.log("Label created or retrieved:", response.data);
      setIsSubmitting(false);
      toast("Message sent!", {
        type: "success",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.error("Error creating label:", error.message);
      toast("Error sending Message", {
        type: "error",
        description: "Please try again later.",
      });
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-zinc-900 py-20`}
    >
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto relative overflow-hidden text-center flex flex-col items-center justify-center"
        >

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Top Text */}
            <p className="text-center text-sm md:text-base mb-6 text-white">
              Got a project? Need an unfair advantage?
            </p>

            {/* Big Heading */}
            <div className="flex items-center justify-center flex-wrap text-center gap-x-8 leading-none font-black uppercase tracking-tight mb-10">
              <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
                Get In
              </h1>

              <div className="flex items-center justify-center">
                {/* Circle */}
                <div className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
                  T
                </div>
                <div className="w-12 h-12 flex items-center justify-center md:w-28 md:h-28 rounded-full bg-[#e45c22] mx-1 md:mx-3">
                  <ArrowUpRight size={120} />
                </div>
                <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
                  Uch
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto w-[100%] md:w-[30%]  z-10 relative"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-secondary peer  text-primary"
                        />
                        <img
                          src="/assets/images/arrow2.png"
                          className="size-40 absolute top-[-270%] duration-150 transition peer-focus:opacity-100 peer-focus:scale-100 opacity-0 scale-0"
                          alt="desc-arrow"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="your@email.com"
                          {...field}
                          className="bg-secondary peer text-primary"
                        />
                        <img
                          src="/assets/images/arrow2.png"
                          className="size-40 absolute top-[-270%] duration-150 transition peer-focus:opacity-100 peer-focus:scale-100 opacity-0 scale-0"
                          alt="desc-arrow"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea
                          placeholder="Tell me about your project or what you need to build"
                          className="min-h-[120px] peer focus:outline-none focus:ring-2 focus:ring-[#e45c22] bg-secondary text-primary"
                          {...field}
                        />
                        <img
                          src="/assets/images/arrow2.png"
                          className="size-40 absolute top-[-80%] ml-4 duration-150 transition peer-focus:opacity-100 peer-focus:scale-100 opacity-0 scale-0"
                          alt="desc-arrow"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="ghost"
                className="w-full text-black bg-white hover:text-white hover:bg-[#e45c22]/80"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}

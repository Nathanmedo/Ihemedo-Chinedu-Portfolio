"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { useState } from "react";

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
import { Poppins } from "next/font/google";
import { sections } from "@/constants";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

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
      className={`relative overflow-hidden bg-zinc-900 py-20 ${poppins.className}`}
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl z-10 font-bold tracking-tighter sm:text-4xl relative">
            Get in Touch
            {active === sections[4] && (
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className={`absolute size-[200px] z-[-1]  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]`}
                src="/assets/images/contact brush.png"
                alt="deco"
              />
            )}
          </h2>
          <p className="mb-8 text-gray-400 z-10 relative">
            Interested in collaborating or commissioning a piece? Let's create
            something amazing together.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md z-10 relative"
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
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="bg-secondary  text-primary"
                      />
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
                      <Input
                        placeholder="your@email.com"
                        {...field}
                        className="bg-secondary  text-primary"
                      />
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
                      <Textarea
                        placeholder="Tell me about your project or what you need to build"
                        className="min-h-[120px] ffocus:outline-none focus:ring-2 focus:ring-[#e45c22] bg-secondary text-primary"
                        {...field}
                      />
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

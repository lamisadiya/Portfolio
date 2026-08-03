"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/constant";
import SheetHeading from "@/components/SheetHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <SheetHeading index="07" total="09" label="REFERENCES" title="What people say" />

        <div className="grid sm:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              className="border-t-2 border-primary pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <blockquote className="text-lg leading-relaxed text-foreground/90">
                {t.content}
              </blockquote>
              <figcaption className="mt-6 font-mono text-sm">
                <span className="text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> — {t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

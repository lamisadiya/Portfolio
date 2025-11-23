"use client";

import { motion } from "framer-motion";
import { Users, Star } from "lucide-react";

const testimonials = [
  {
    name: "ACM Student Chapter Team",
    role: "Membership Chair, IUB ACM (Mar 2021 - Oct 2022)",
    content: "Led membership drives and organized events, building strong teamwork and leadership skills in a competitive tech community.",
    rating: 5,
  },
  // Add real quotes here
  {
    name: "Graphodio Team",
    role: "Colleague",
    content: "Excellent at delivering smooth, animated web experiences on time.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <motion.section id="testimonials" className="py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials & Extracurricular</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-lg italic mb-6">"{t.content}"</p>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
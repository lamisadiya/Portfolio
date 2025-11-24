"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/constant";

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Real feedback from teammates & community
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Big subtle quote mark */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-cyan-500/10 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-8 italic">
                “{t.content}”
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-lg">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
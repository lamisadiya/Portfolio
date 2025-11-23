"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/lib/constant";

export default function Education() {
  return (
    <motion.section id="education" className="py-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div key={i} className="flex gap-6 group" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                {i < education.length - 1 && <div className="w-0.5 h-24 bg-purple-600/30 mt-2" />}
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-purple-600 dark:text-purple-400 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4" />
                  {edu.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
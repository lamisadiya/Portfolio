"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/constant";

export default function Projects() {
  return (
    <motion.section id="projects" className="py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{proj.desc}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{proj.tech}</p>
                <p className="text-xs text-gray-500 mb-4">{proj.date}</p>
                <div className="flex gap-2">
                  <a href={proj.link} className="flex-1 text-center p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 inline mr-1" /> Demo
                  </a>
                  <a href="#" className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
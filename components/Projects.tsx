"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/constant";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hover over any project to scroll through the full design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.article
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
            >
              {/* THIS IS THE ONE THAT WORKS 100% */}
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-auto min-h-full object-cover transition-all duration-1000 ease-linear
                    group-hover:-translate-y-[calc(100%-224px)] 
                    group-hover:duration-[10s]"
                  style={{ transform: "translateY(0)" }}
                />

                {/* Hover badge */}
                <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="bg-cyan-500/20 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full">
                    Scrolling full view...
                  </span>
                </div>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Rest of your card (unchanged) */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.split(", ").map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-300 dark:border-cyan-700"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {proj.date}
                  </span>
                  <div className="flex gap-3">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
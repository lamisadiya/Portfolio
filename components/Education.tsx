"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { education } from "@/lib/constant";


export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="flex gap-8 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                {i < education.length - 1 && (
                  <div className="w-0.5 h-full bg-linear-to-b from-cyan-500/30 to-transparent mt-4" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-cyan-600 dark:text-cyan-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{edu.duration}</span>
                  </div>
                </div>

                {/* Relevant Courses */}
                {edu.relevantCourses && (
                  <div className="mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-5 h-5 text-cyan-500" />
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        Key Subjects:
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-4 py-2 text-sm font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-300 dark:border-cyan-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Accent line */}
                <div className="mt-6 h-1 w-20 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
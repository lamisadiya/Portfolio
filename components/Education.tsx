"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, ChevronDown } from "lucide-react";
import { education } from "@/lib/constant";

export default function Education() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-20 lg:py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Click on any milestone to explore details
          </p>
        </motion.div>

        <div className="relative">
          {/* Progressive Timeline Line (Background) */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 " />
          <motion.div
            className="absolute left-6 sm:left-8 top-0 w-0.5 "
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-12 lg:space-y-16">
            {education.map((edu, i) => {
              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={i}
                  className="relative flex items-start gap-6 sm:gap-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Interactive Timeline Dot */}
                  <button
                    onClick={() => toggleItem(i)}
                    className="shrink-0 z-10 focus:outline-none"
                    aria-expanded={isActive}
                    aria-controls={`edu-content-${i}`}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        isActive
                          ? "bg-linear-to-br from-cyan-400 to-blue-600 shadow-cyan-500/50 scale-125"
                          : "bg-linear-to-br from-cyan-500 to-blue-600 shadow-cyan-500/30"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: isActive
                          ? "0 0 30px rgba(34, 211, 238, 0.6)"
                          : "0 10px 30px rgba(34, 211, 238, 0.2)",
                      }}
                    >
                      <GraduationCap className="w-7 h-7 text-white" />
                    </motion.div>

                                      </button>

                  {/* Expandable Card */}
                  <motion.div
                    className="flex-1 pb-10 cursor-pointer"
                    onClick={() => toggleItem(i)}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      layout
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                      animate={{
                        borderColor: isActive ? "rgba(34, 211, 238, 0.5)" : "",
                        boxShadow: isActive
                          ? "0 20px 40px rgba(0,0,0,0.1), 0 0 30px rgba(34, 211, 238, 0.2)"
                          : "0 10px 30px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* Card Header */}
                      <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                              {edu.degree}
                              <motion.div
                                animate={{ rotate: isActive ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-cyan-500" />
                              </motion.div>
                            </h3>
                            <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                              {edu.institution}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Calendar className="w-5 h-5" />
                            <span className="font-medium">{edu.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Content */}
                      
                        {isActive && (
                          <motion.div
                            id={`edu-content-${i}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                              {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <BookOpen className="w-5 h-5 text-cyan-500" />
                                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                                      Key Subjects:
                                    </p>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {edu.relevantCourses.map((course) => (
                                      <motion.span
                                        key={course}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="px-4 py-2 text-sm font-medium bg-linear-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-300/50 dark:border-cyan-700"
                                      >
                                        {course}
                                      </motion.span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              
                            </div>
                          </motion.div>
                        )}
                    

                      {/* Accent Bar */}
                      <div className="h-1 bg-linear-to-r from-cyan-500 to-blue-600" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

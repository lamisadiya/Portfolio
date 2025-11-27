"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiGreensock,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import { BarChart3, Sparkles } from "lucide-react";
import { categories } from "@/lib/constant";
import { currentlyLearning } from "@/lib/constant";

const techSkills = [
  { name: "C++", icon: <SiCplusplus className="w-10 h-10" />, proficiency: 90, category: "Programming" },
  { name: "Python", icon: <SiPython className="w-10 h-10" />, proficiency: 85, category: "Programming" },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10" />, proficiency: 95, category: "Programming" },
  { name: "PHP", icon: <SiPhp className="w-10 h-10" />, proficiency: 70, category: "Programming" },
  { name: "TypeScript", icon: <SiTypescript className="w-10 h-10" />, proficiency: 85, category: "Programming" },
  { name: "HTML", icon: <SiHtml5 className="w-10 h-10" />, proficiency: 95, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 className="w-10 h-10" />, proficiency: 90, category: "Frontend" },
  { name: "React", icon: <SiReact className="w-10 h-10" />, proficiency: 85, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10" />, proficiency: 80, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10" />, proficiency: 80, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10" />, proficiency: 85, category: "Frontend" },
  { name: "GSAP", icon: <SiGreensock className="w-10 h-10" />, proficiency: 75, category: "Animation" },
  { name: "Numpy", icon: <SiNumpy className="w-10 h-10" />, proficiency: 70, category: "Data Science" },
  { name: "Pandas", icon: <SiPandas className="w-10 h-10" />, proficiency: 70, category: "Data Science" },
  { name: "Matplotlib", icon: <BarChart3 className="w-10 h-10" />, proficiency: 65, category: "Data Science" },
  { name: "MySQL", icon: <SiMysql className="w-10 h-10" />, proficiency: 65, category: "Backend" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? techSkills
    : techSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Tools & technologies I work with every day
          </p>
        </motion.div>

        {/* Category Tabs - Better mobile wrapping */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap
                ${activeCategory === cat
                  ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-cyan-500/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid - Much better on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[140px] sm:min-h-40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="text-cyan-500 dark:text-cyan-400 mb-3 text-4xl sm:text-5xl">
                {skill.icon}
              </div>
              <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                {skill.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 opacity-80">
                {skill.category}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-16 sm:mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-3 text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-7 h-7" />
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
            {currentlyLearning.map((item, i) => (
              <span
                key={i}
                className="px-5 sm:px-6 py-3 bg-linear-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 font-semibold text-sm sm:text-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
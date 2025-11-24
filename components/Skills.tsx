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
    <section id="skills" className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Tools & technologies I work with every day
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all
                ${activeCategory === cat
                  ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:border-cyan-500/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-cyan-500 dark:text-cyan-400 mb-3">{skill.icon}</div>
              <p className="font-bold text-gray-900 dark:text-white">{skill.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.category}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold flex items-center justify-center gap-3 text-cyan-600 dark:text-cyan-400">
            <Sparkles className="w-7 h-7" />
            Currently Learning
          </h3>
          <div className="flex justify-center gap-4 mt-6">
            {currentlyLearning.map((item, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-linear-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 font-semibold text-lg"
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
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
import { BarChart3, Users, MessageCircle } from "lucide-react";
import { categories } from "@/lib/constant";
const techSkills = [
  { name: "C++", icon: <SiCplusplus size={40} />, proficiency: 90, category: "Programming" },
  { name: "Python", icon: <SiPython size={40} />, proficiency: 85, category: "Programming" },
  { name: "JavaScript", icon: <SiJavascript size={40} />, proficiency: 95, category: "Programming" },
  { name: "PHP", icon: <SiPhp size={40} />, proficiency: 70, category: "Programming" },
  { name: "TypeScript", icon: <SiTypescript size={40} />, proficiency: 85, category: "Programming" },
  { name: "HTML", icon: <SiHtml5 size={40} />, proficiency: 95, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 size={40} />, proficiency: 90, category: "Frontend" },
  { name: "React", icon: <SiReact size={40} />, proficiency: 85, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, proficiency: 80, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap size={40} />, proficiency: 80, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, proficiency: 85, category: "Frontend" },
  { name: "GSAP", icon: <SiGreensock size={40} />, proficiency: 75, category: "Animation" },
  { name: "Numpy", icon: <SiNumpy size={40} />, proficiency: 70, category: "Data Science" },
  { name: "Pandas", icon: <SiPandas size={40} />, proficiency: 70, category: "Data Science" },
  { name: "Matplotlib", icon: <BarChart3 size={40} />, proficiency: 65, category: "Data Science" },
  { name: "MySQL", icon: <SiMysql size={40} />, proficiency: 65, category: "Backend" },

];


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? techSkills
      : techSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
          Skills & Expertise
        </h2>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border 
                ${activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID SHOWING FILTERED SKILLS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="group flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-gray-700 dark:text-gray-300 mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-center">{skill.name}</p>
              <p className="text-xs mt-1 text-blue-500 font-semibold">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

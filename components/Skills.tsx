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
import { BarChart3 } from "lucide-react";
import { categories, currentlyLearning } from "@/lib/constant";
import SheetHeading from "@/components/SheetHeading";

const techSkills = [
  { name: "C++", icon: <SiCplusplus className="w-7 h-7" />, proficiency: 90, category: "Programming" },
  { name: "Python", icon: <SiPython className="w-7 h-7" />, proficiency: 85, category: "Programming" },
  { name: "JavaScript", icon: <SiJavascript className="w-7 h-7" />, proficiency: 95, category: "Programming" },
  { name: "PHP", icon: <SiPhp className="w-7 h-7" />, proficiency: 70, category: "Programming" },
  { name: "TypeScript", icon: <SiTypescript className="w-7 h-7" />, proficiency: 85, category: "Programming" },
  { name: "HTML", icon: <SiHtml5 className="w-7 h-7" />, proficiency: 95, category: "Frontend" },
  { name: "CSS", icon: <SiCss3 className="w-7 h-7" />, proficiency: 90, category: "Frontend" },
  { name: "React", icon: <SiReact className="w-7 h-7" />, proficiency: 85, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="w-7 h-7" />, proficiency: 80, category: "Frontend" },
  { name: "Bootstrap", icon: <SiBootstrap className="w-7 h-7" />, proficiency: 80, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-7 h-7" />, proficiency: 85, category: "Frontend" },
  { name: "GSAP", icon: <SiGreensock className="w-7 h-7" />, proficiency: 75, category: "Animation" },
  { name: "Numpy", icon: <SiNumpy className="w-7 h-7" />, proficiency: 70, category: "Data Science" },
  { name: "Pandas", icon: <SiPandas className="w-7 h-7" />, proficiency: 70, category: "Data Science" },
  { name: "Matplotlib", icon: <BarChart3 className="w-7 h-7" />, proficiency: 65, category: "Data Science" },
  { name: "MySQL", icon: <SiMysql className="w-7 h-7" />, proficiency: 65, category: "Backend" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All" ? techSkills : techSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SheetHeading
          index="02"
          total="09"
          label="SPECIFICATION"
          title="Skills & tooling"
          note="Rated by working proficiency, not certification — the number I'd give myself if a lead asked."
        />

        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs tracking-widest uppercase">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 border transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="group relative bg-background p-5 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-primary">{skill.icon}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{skill.proficiency}%</span>
              </div>
              <div>
                <p className="font-medium text-sm">{skill.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">
                  {skill.category}
                </p>
              </div>
              <div className="h-px w-full bg-border overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-700"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {currentlyLearning.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-4 font-mono text-sm">
            <span className="text-muted-foreground tracking-widest uppercase text-xs">Currently learning</span>
            {currentlyLearning.map((item) => (
              <span key={item} className="px-4 py-1.5 border border-primary/40 text-primary">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

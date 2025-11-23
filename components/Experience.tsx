"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Graphodio",
    duration: "Oct 2024 - Present",
    desc: "Building creative agency websites with modern design, GSAP animations, and optimized performance using Next.js, TypeScript, and JavaScript.",
  },
  {
    role: "Intern",
    company: "Bizcope",
    duration: "Jun 2024 - Sep 2024",
    desc: "Supported web development tasks and collaborated on project deliverables.",
  },
  {
    role: "Admission Support Intern",
    company: "Admission Portal",
    duration: "Dec 2021 - Aug 2022",
    desc: "Assisted in admission processes and gained experience in educational tech support.",
  },
];

export default function Experience() {
  return (
    <motion.section id="experience" className="py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div key={i} className="flex gap-6 group" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                  <Briefcase className="w-6 h-6" />
                </div>
                {i < experiences.length - 1 && <div className="w-0.5 h-24 bg-green-600/30 mt-2" />}
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-green-600 dark:text-green-400 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
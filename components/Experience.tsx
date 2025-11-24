"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "Graphodio",
    duration: "Oct 2024 – Present",
    link: "https://graphodio.com", // optional
    bullets: [
      "Building high-performance creative agency websites using Next.js 14+, TypeScript, and GSAP animations",
      "Implemented advanced scroll-triggered animations and micro-interactions that improved user engagement by ~45%",
      "Optimized Core Web Vitals (LCP < 1.8s, CLS < 0.05) using SSR, lazy loading, and next/image",
      "Integrated headless CMS (Sanity/Strapi) and deployed via Vercel with CI/CD",
    ],
    tech: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Tailwind", "Sanity"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bizcope",
    duration: "Jun 2024 – Sep 2024",
    bullets: [
      "Developed and shipped 5+ responsive landing pages and dashboards using React, Tailwind CSS, and React Query",
      "Reduced API calls by 60% through state management optimization (Zustand + caching)",
      "Collaborated with designers using Figma → implemented pixel-perfect UIs with smooth animations",
      "Participated in daily standups and code reviews in a team of 8 developers",
    ],
    tech: ["React", "Tailwind", "React Query", "Zustand", "Figma"],
  },
  {
    role: "Admission Support Intern",
    company: "University Admission Portal",
    duration: "Dec 2021 – Aug 2022",
    bullets: [
      "Built internal tools using PHP & MySQL that automated 80% of manual data entry tasks",
      "Created dynamic student dashboards with real-time application status updates",
      "Assisted in migrating legacy system to Laravel, improving load time from 12s → 2.3s",
      "Provided technical support and training to 50+ administrative staff",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="flex gap-8 group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Timeline Dot & Line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                {i < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-linear-to-b from-cyan-500/30 to-transparent mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-cyan-500/30 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-lg font-medium text-cyan-600 dark:text-cyan-400">
                        {exp.company}
                      </p>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-cyan-500 transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5" />
                    {exp.duration}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-cyan-500 mt-1.5">▹</span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full border border-cyan-300 dark:border-cyan-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
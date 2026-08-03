"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experiences } from "@/lib/constant";
import SheetHeading from "@/components/SheetHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <SheetHeading index="04" total="09" label="RECORD" title="Experience" />

        <div className="border-l border-border ml-2">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-10 pb-14 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-primary" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-semibold">{exp.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.duration}</span>
              </div>

              <div className="flex items-center gap-2 mt-1 mb-4">
                <p className="font-mono text-sm text-primary">{exp.company}</p>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                    <span className="text-primary shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 font-mono text-[10px] tracking-wide uppercase border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

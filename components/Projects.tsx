"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/constant";
import SheetHeading from "@/components/SheetHeading";
import CornerFrame from "@/components/CornerFrame";

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SheetHeading index="06" total="09" label="ARCHIVE" title="Selected projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.article
              key={i}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            >
              <a
                href={proj.link !== "#" ? proj.link : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-44 overflow-hidden bg-muted mb-4"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <CornerFrame className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold leading-tight">{proj.title}</h3>
                {proj.link && proj.link !== "#" && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors"
                    aria-label={`Open ${proj.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="font-mono text-[10px] text-muted-foreground mt-1 mb-3 tracking-wide">{proj.date}</p>

              <p className="text-sm text-foreground/80 leading-relaxed mb-4">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.split(", ").map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide border border-border text-muted-foreground"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

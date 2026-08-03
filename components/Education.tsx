"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { education } from "@/lib/constant";
import SheetHeading from "@/components/SheetHeading";

export default function Education() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="education" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-secondary/40">
      <div className="max-w-4xl mx-auto">
        <SheetHeading
          index="03"
          total="09"
          label="TRANSCRIPT"
          title="Education"
          note="Tap a line to see the relevant coursework."
        />

        <div className="border border-border divide-y divide-border">
          {education.map((edu, i) => {
            const isActive = activeIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="w-full flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-left px-6 py-5 hover:bg-accent/50 transition-colors"
                  aria-expanded={isActive}
                >
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold">{edu.degree}</h3>
                    <p className="font-mono text-sm text-primary mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-muted-foreground">{edu.duration}</span>
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-primary"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && edu.relevantCourses?.length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 flex flex-wrap gap-2">
                        {edu.relevantCourses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1.5 font-mono text-xs border border-border text-muted-foreground"
                          >
                            {course.trim()}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/constant";

const fields = [
  { label: "ROLE", value: profile.role },
  { label: "BASE", value: profile.base },
  { label: "STATUS", value: profile.status },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-28 pb-16 overflow-hidden drafting-grid"
    >
      {/* corner ticks framing the whole sheet */}
      <div className="pointer-events-none absolute inset-6 sm:inset-8 border border-border" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div
          className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span>PORTFOLIO — SHEET 00/09</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-muted-foreground">COVER</span>
        </motion.div>

        <motion.h1
          className="mt-10 font-display font-semibold leading-[0.95] tracking-tight text-balance text-[13vw] sm:text-7xl lg:text-8xl"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          {profile.name}
        </motion.h1>

        <motion.div
          className="mt-6 h-px bg-primary origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeInOut" }}
        />

        <div className="mt-10 grid sm:grid-cols-[1fr_auto] gap-10 items-start">
          <motion.p
            className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {profile.bio}
          </motion.p>

          {/* title block, like the corner of an engineering drawing */}
          <motion.dl
            className="font-mono text-sm border border-border divide-y divide-border w-full sm:w-72"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {fields.map((f) => (
              <div key={f.label} className="flex items-center justify-between px-4 py-3 gap-4">
                <dt className="text-muted-foreground tracking-widest">{f.label}</dt>
                <dd className="text-right text-foreground">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="mt-14 flex flex-wrap items-center gap-6"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-wide hover:brightness-110 transition"
          >
            Get in touch
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border font-mono text-sm tracking-wide hover:border-primary hover:text-primary transition"
          >
            View résumé
          </a>
        </motion.div>
      </div>
    </section>
  );
}

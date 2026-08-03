"use client";
import { motion } from "framer-motion";

export default function SheetHeading({
  index,
  total,
  label,
  title,
  note,
}: {
  index: string;
  total: string;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <motion.div
      className="mb-14 lg:mb-20"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary">
        <span>
          SHEET {index}/{total}
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="text-muted-foreground">{label}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {note && (
        <p className="mt-3 max-w-2xl font-mono text-sm text-muted-foreground">{note}</p>
      )}
    </motion.div>
  );
}

"use client";
import { profile } from "@/lib/constant";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 sm:px-10 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span>
          SHEET 09/09 — © {year} {profile.name}
        </span>
        <span>Built with Next.js · Drafted, not templated.</span>
      </div>
    </footer>
  );
}

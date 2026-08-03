"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import SheetHeading from "@/components/SheetHeading";
import { profile } from "@/lib/constant";

const socialIcons: Record<string, React.ElementType> = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
};

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <SheetHeading index="01" total="09" label="PROFILE" title="About" />

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-foreground/90 max-w-xl">
              {profile.bio}
            </p>

            <dl className="font-mono text-sm space-y-4">
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <dd>{profile.phone}</dd>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-primary transition">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <dd>Mohammadpur, Bangladesh</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Linkedin;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-5 py-4 border border-border hover:border-primary transition-colors group"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm tracking-wide">{s.label}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    ↗
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

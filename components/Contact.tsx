"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Download, Send } from "lucide-react";
import SheetHeading from "@/components/SheetHeading";
import { profile } from "@/lib/constant";

const socialIcons: Record<string, React.ElementType> = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <SheetHeading
          index="08"
          total="09"
          label="SIGN-OFF"
          title="Let's build something"
          note={profile.status}
        />

        <div className="grid lg:grid-cols-2 gap-14">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
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
                <dd>{profile.base}</dd>
              </div>
            </dl>

            <div className="flex gap-3 pt-2">
              {profile.socials.map((s) => {
                const Icon = socialIcons[s.label] ?? Linkedin;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-3 w-full h-14 bg-primary text-primary-foreground font-mono text-sm tracking-wide hover:brightness-110 transition"
            >
              <Send className="w-4 h-4" />
              Send an email
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full h-14 border border-border font-mono text-sm tracking-wide hover:border-primary hover:text-primary transition"
            >
              <Download className="w-4 h-4" />
              Download résumé
            </a>
            <p className="font-mono text-xs text-muted-foreground text-center pt-2">
              Usually replies within 2 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

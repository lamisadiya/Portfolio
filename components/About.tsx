"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Passionate about building modern web applications and integrating hardware-software solutions. Currently Web Developer at Graphodio, with hands-on experience in full-stack development and IoT projects.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 text-lg">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Phone className="w-6 h-6 text-cyan-500" />
                </div>
                <span>+8801994782966</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Mail className="w-6 h-6 text-cyan-500" />
                </div>
                <a href="mailto:lamisa.diya09@gmail.com" className="underline underline-offset-4 hover:text-cyan-500 transition">
                  lamisa.diya09@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-cyan-500" />
                </div>
                <span>Mohammadpur, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Social Links – Premium Style */}
          <motion.div
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { Icon: Instagram, link: "https://instagram.com/lamisa_diya09", label: "Instagram" },
              { Icon: Linkedin, link: "https://linkedin.com/in/lamisadiya", label: "LinkedIn" },
              { Icon: Facebook, link: "https://www.facebook.com/lamisadiya9", label: "Facebook" },
            ].map(({ Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-xl transition-all group"
              >
                <div className="p-3 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-lg">{label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
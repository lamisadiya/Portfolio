"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ExternalLink, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Linkedin, link: "https://linkedin.com/in/lamisadiya", color: "hover:bg-[#0077b5]" },
    { icon: Instagram, link: "https://instagram.com/lamisa_diya09", color: "hover:bg-gradient-to-tr from-pink-500 to-yellow-500" },
    { icon: Mail, link: "mailto:lamisa.diya09@gmail.com", color: "hover:bg-cyan-500" },
  ];

  return (
    <motion.footer
      className="relative overflow-hidden bg-linear-to-t from-black via-gray-900 to-gray-900 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Main content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Name + tagline */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Farhat Lamisa
            </h3>
            <p className="mt-2 text-gray-400">Front-End Engineer • Turning ideas into beautiful web experiences</p>
          </div>

          {/* Social icons – bigger & beautiful */}
          <div className="flex justify-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all group ${social.color}`}
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-6 h-6 text-white group-hover:text-white transition" />
              </motion.a>
            ))}
          </div>

          {/* Final message + copyright */}
          <div className="pt-8 border-t border-gray-800">
           
            <p className="text-xs text-gray-600 mt-2">
              © {year} Farhat Lamisa. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
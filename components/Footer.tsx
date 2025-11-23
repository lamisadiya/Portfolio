"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer className="bg-gray-900 text-white py-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <p className="text-sm">© {new Date().getFullYear()} Farhat Lamisa. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/lamisa_diya09" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/lamisadiya" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:lamisa.diya09@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-green-600">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
    
      </div>
    </motion.footer>
  );
}
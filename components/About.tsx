"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function About() {
  return (
    <motion.section id="about" className="py-20 px-4" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Passionate about building modern web applications and integrating hardware-software solutions. Currently Web Developer at Graphodio, with hands-on experience in full-stack development and IoT projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+8801994782966</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>lamisa.diya09@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Mohammadpur, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <a href="https://instagram.com/lamisa_diya09" target="_blank" className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="https://linkedin.com/in/lamisadiya" target="_blank" className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/lamisadiya9" target="_blank" className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
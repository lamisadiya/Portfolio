"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin,Facebook, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* CV-style heading */}
        <h2 className="text-4xl font-bold text-center mb-2">Let’s Talk</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info (exactly like your CV) */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-lg">+880 1994 782 966</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <a href="mailto:lamisa.diya09@gmail.com" className="text-lg underline">
                lamisa.diya09@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-lg">Mohammadpur, Dhaka</span>
            </div>

            <div className="pt-6 flex gap-4">
              <a
                href="https://instagram.com/lamisa_diya09"
                target="_blank"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/lamisadiya9"
                target="_blank"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/lamisadiya"
                target="_blank"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Quick Actions */}
          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Connect</h3>

            {/* Email Me */}
            <Button
              className="w-full justify-start gap-3 text-left"
              size="lg"
              onClick={() => window.location.href = "mailto:lamisa.diya09@gmail.com"}
            >
              <Send className="w-5 h-5" />
              Send me an email
            </Button>

            {/* Download CV */}
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-left border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              size="lg"
              onClick={() => window.open("/Farhat_Lamisa_CV.pdf", "_blank")}
            >
              <Download className="w-5 h-5" />
              Download CV (PDF)
            </Button>

          
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center mt-12 text-gray-600 dark:text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          I usually reply within **2 hours** — let’s build something awesome together! 
        </motion.p>
      </div>
    </motion.section>
  );
}
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Download, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 bg-linear-to-b from-transparent to-gray-50 dark:to-gray-900/70 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let’s Build Something Awesome
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            I’m currently <span className="text-cyan-500 font-semibold">open to full-time roles & freelance projects</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info + Socials */}
          <motion.div
            className="space-y-8"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <div className="p-3 bg-cyan-500/10 rounded-xl">
                  <Phone className="w-6 h-6 text-cyan-500" />
                </div>
                <span>+880 1994 782 966</span>
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
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              {[
                { Icon: Linkedin, link: "https://linkedin.com/in/lamisadiya", label: "LinkedIn" },
                { Icon: Instagram, link: "https://instagram.com/lamisa_diya09", label: "Instagram" },
                { Icon: Facebook, link: "https://facebook.com/lamisadiya9", label: "Facebook" },
              ].map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-cyan-500 hover:text-white transition-all group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Actions (BIG & BOLD) */}
          <motion.div
            className="space-y-6"
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-cyan-500" />
              Quick Connect
            </h3>

            {/* Email Button */}
            <Button
              className="w-full h-16 text-lg font-medium bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25"
              size="lg"
              onClick={() => window.location.href = "mailto:lamisa.diya09@gmail.com"}
            >
              <Send className="w-6 h-6 mr-3" />
              Send me an Email
            </Button>

            {/* Download CV Button */}
            <Button
              variant="outline"
              className="w-full h-16 text-lg font-medium border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-lg"
              size="lg"
              onClick={() => window.open("/Farhat_Lamisa_CV.pdf", "_blank")}
            >
              <Download className="w-6 h-6 mr-3" />
              Download Resume (PDF)
            </Button>

            
          </motion.div>
        </div>

        {/* Final Note */}
        <motion.p
          className="text-center mt-16 text-lg text-gray-600 dark:text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I usually reply in <span className="font-bold text-cyan-500">under 2 hours</span> — let’s make something great together!
        </motion.p>
      </div>

      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
    </motion.section>
  );
}
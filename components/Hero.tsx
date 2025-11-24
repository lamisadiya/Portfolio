"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-t from-cyan-500/10 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Farhat Lamisa
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-2xl md:text-4xl font-semibold text-gray-300 mt-4"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Software Engineer & Web Developer
        </motion.p>

        {/* Bio paragraph – your exact original text */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-8 leading-relaxed"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          A Computer Science and Engineering student proficient in C++, Python, PHP and JavaScript, specializing in web development with React and Bootstrap. Projects demonstrate seamless integration of hardware and software, alongside strong communication and deadline-oriented skills.
        </motion.p>

        {/* CTA Button – now matches your premium style */}
        <motion.div
          className="mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>

        {/* Optional scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8 text-cyan-400/60" />
        </motion.div>
      </div>
    </motion.section>
  );
}
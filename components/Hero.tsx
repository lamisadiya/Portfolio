"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center text-center bg-linear-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
        Farhat Lamisa
      </motion.h1>
      <motion.p className="text-2xl md:text-3xl mb-6" initial={{ y: -30 }} animate={{ y: 0 }} transition={{ delay: 0.4 }}>
        Software Engineer & Web Developer
      </motion.p>
      <motion.p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.6 }}>
        A Computer Science and Engineering student proficient in C++, Python, PHP and JavaScript, specializing in web development with React and Bootstrap. Projects demonstrate seamless integration of hardware and software, alongside strong communication and deadline-oriented skills.
      </motion.p>
      <motion.a
        href="#contact"
        className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        Get in Touch
      </motion.a>
    </motion.section>
  );
}
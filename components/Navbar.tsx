// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, User, Code, Briefcase, Award, FolderOpen, MessageCircle, Phone, GraduationCap } from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

const navItems = [
  { name: "Home", href: "#hero", icon: <Home className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
  { name: "Education", href: "#education", icon: <GraduationCap className="w-4 h-4" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Awards", href: "#awards", icon: <Award className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <FolderOpen className="w-4 h-4" /> },
  { name: "Testimonials", href: "#testimonials", icon: <MessageCircle className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#hero")}
          >
            <span className="text-xl font-bold">Farhat Lamisa</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                {item.name}
              </motion.a>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-bold">Menu</h3>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4">
                    {navItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                        className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                          activeSection === item.href.slice(1)
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
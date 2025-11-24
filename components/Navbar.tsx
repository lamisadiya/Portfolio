// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu, X, Home, User, Code, Briefcase, Award,
  FolderOpen, MessageCircle, Phone, GraduationCap
} from "lucide-react";
import DarkModeToggle from "@/components/DarkModeToggle";

const navItems = [
  { name: "Home", href: "#hero", icon: <Home className="w-5 h-5" /> },
  { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
  { name: "Skills", href: "#skills", icon: <Code className="w-5 h-5" /> },
  { name: "Education", href: "#education", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
  { name: "Awards", href: "#certifications", icon: <Award className="w-5 h-5" /> },
  { name: "Projects", href: "#projects", icon: <FolderOpen className="w-5 h-5" /> },
  { name: "Testimonials", href: "#testimonials", icon: <MessageCircle className="w-5 h-5" /> },
  { name: "Contact", href: "#contact", icon: <Phone className="w-5 h-5" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const { href } of navItems) {
        const section = document.querySelector(href);
        if (section) {
          const { offsetTop, offsetHeight } = section as HTMLElement;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(href.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          <div className="relative w-12 h-12">
  <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-70" />
  <div className="relative flex items-center justify-center w-full h-full bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-2xl">
    F
  </div>
  <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full blur-sm" />
</div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={`flex items-center gap-2 text-sm font-medium transition-all
                  ${activeSection === item.href.slice(1)
                    ? "text-cyan-500 dark:text-cyan-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                  }`}
                whileHover={{ y: -2 }}
              >
                {item.icon}
                {item.name}
              </motion.a>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <DarkModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700 dark:text-gray-300">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">
                <div className="flex flex-col h-full py-6">
                  <div className="flex items-center justify-between px-6 mb-10">
                    <h3 className="text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      Farhat Lamisa
                    </h3>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="flex-1 space-y-2 px-6">
                    {navItems.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                        className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all
                          ${activeSection === item.href.slice(1)
                            ? "bg-linear-to-r from-cyan-500/10 to-blue-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        whileHover={{ x: 8 }}
                      >
                        <div className={activeSection === item.href.slice(1) ? "text-cyan-500" : ""}>
                          {item.icon}
                        </div>
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Active section indicator bar */}
      <div className="h-0.5 bg-linear-to-r from-cyan-500 to-blue-600 scale-x-0 origin-left transition-transform duration-500"
        style={{ transform: activeSection !== "hero" ? "scaleX(1)" : "scaleX(0)" }}
      />
    </motion.nav>
  );
}
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/constant";

const navItems = [
  { name: "About", href: "#about", n: "01" },
  { name: "Skills", href: "#skills", n: "02" },
  { name: "Education", href: "#education", n: "03" },
  { name: "Experience", href: "#experience", n: "04" },
  { name: "Awards", href: "#certifications", n: "05" },
  { name: "Projects", href: "#projects", n: "06" },
  { name: "Testimonials", href: "#testimonials", n: "07" },
  { name: "Contact", href: "#contact", n: "08" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 140;
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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
        scrolled ? "bg-background/90 backdrop-blur-md border-border" : "bg-transparent border-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="font-display font-semibold tracking-tight text-lg">
            {profile.shortName}
            <span className="text-primary">.</span>
          </a>

          <div className="hidden lg:flex items-center gap-7 font-mono text-xs tracking-widest">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`flex items-center gap-1.5 uppercase transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="opacity-60">{item.n}</span>
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex flex-col h-full py-6">
                  <div className="flex items-center justify-between px-6 mb-10">
                    <h3 className="font-display text-xl font-semibold">{profile.name}</h3>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="flex-1 space-y-1 px-6 font-mono text-sm">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollTo(item.href);
                        }}
                        className={`flex items-center gap-3 px-3 py-3 border-b border-border uppercase tracking-widest transition-colors ${
                          activeSection === item.href.slice(1)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="opacity-60">{item.n}</span>
                        {item.name}
                      </a>
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

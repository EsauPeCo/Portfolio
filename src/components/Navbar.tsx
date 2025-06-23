"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, PawPrint, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Timeline", sectionId: "timeline" },
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
  { label: "Contact", sectionId: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showPuppyModal, setShowPuppyModal] = useState(false);
  const [pawHighlighted, setPawHighlighted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlightPaw = () => {
    setPawHighlighted(true);
    setTimeout(() => setPawHighlighted(false), 400);
  };

  // Listen for paw highlight trigger from other components
  useEffect(() => {
    const handlePawHighlight = () => highlightPaw();
    window.addEventListener('highlightPaw', handlePawHighlight);
    return () => window.removeEventListener('highlightPaw', handlePawHighlight);
  }, []);

  // Updates active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.sectionId,
        element: document.getElementById(item.sectionId),
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-14 items-center">
          <div className="mr-4 pl-4 flex">
            <motion.div 
              className="mr-6 flex items-center space-x-2"
              onClick={highlightPaw}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-bold sm:inline-block">Esaú Pérez</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex-1 hidden md:flex items-center justify-end space-x-2">
            {/* Hidden Paw Print - Easter Egg */}
            <motion.div
              onClick={() => setShowPuppyModal(true)}
              className="text-muted-foreground transition-colors duration-300 cursor-pointer mr-2"
              style={{ 
                opacity: pawHighlighted ? 1 : 0,
                color: pawHighlighted ? 'rgb(var(--primary))' : undefined
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                opacity: 1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              animate={pawHighlighted ? { 
                scale: [1, 1.2, 1], 
                rotate: [0, 8, 0],
                opacity: [0, 1, 0]
              } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              title="🐾 Someone special wants to say hi!"
            >
              <PawPrint className="w-5 h-5" />
            </motion.div>
            
            {navItems.map((item) => (
              <Button
                key={item.sectionId}
                variant={activeSection === item.sectionId ? "default" : "ghost"}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </Button>
            ))}
            <div className="cursor-pointer">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden flex-1 justify-end items-center gap-2">
            {/* Hidden Paw Print for Mobile */}
            <motion.div
              onClick={() => setShowPuppyModal(true)}
              className="text-muted-foreground transition-colors duration-300 cursor-pointer"
              style={{ 
                opacity: pawHighlighted ? 1 : 0,
                color: pawHighlighted ? 'rgb(var(--primary))' : undefined
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                opacity: 1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              animate={pawHighlighted ? { 
                scale: [1, 1.2, 1], 
                rotate: [0, 8, 0],
                opacity: [0, 1, 0]
              } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              title="🐾"
            >
              <PawPrint className="w-5 h-5" />
            </motion.div>
            
            <div className="cursor-pointer">
              <ThemeToggle />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 cursor-pointer">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="grid gap-2 py-6">
                  {navItems.map((item) => (
                    <Button
                      key={item.sectionId}
                      variant={activeSection === item.sectionId ? "default" : "ghost"}
                      onClick={() => scrollToSection(item.sectionId)}
                      className="w-full justify-start cursor-pointer"
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Puppy Modal */}
      {showPuppyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="relative bg-background rounded-lg shadow-xl max-w-md w-full mx-auto">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowPuppyModal(false)}
              className="absolute top-2 right-2 z-10 cursor-pointer hover:bg-background/80"
            >
              <X className="h-4 w-4" />
            </Button>
            
            {/* Puppy content */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">Meet Canelita! 🐾</h3>
              <div className="relative">
                <Image
                  src="/canelita.png"
                  alt="Canelita, Esaú's adorable puppy"
                  width={400}
                  height={300}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Thanks for finding my secret paw print! 🎉
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

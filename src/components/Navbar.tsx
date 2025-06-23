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
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

// Define the navigation items
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

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section based on scroll position
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
    <nav className="fixed top-0 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center">
        <div className="mr-4 pl-4 flex">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Esaú Pérez</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 hidden md:flex items-center justify-end space-x-2">
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
  );
}

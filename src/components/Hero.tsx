"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Esaú Pérez
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Software Developer & Former Esports Professional
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Currently focusing on frontend technologies, building web
              applications with{" "}
              <span className="text-foreground font-semibold">React</span> &{" "}
              <span className="text-foreground font-semibold">TypeScript</span>
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
              <a href="/resume.pdf" download="Esaú_Pérez_Resume.pdf">
                <Button size="lg" className="group cursor-pointer">
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
              <div className="flex space-x-6">
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/EsauPeCo",
                    label: "GitHub",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/esauperezcoronel/",
                    label: "LinkedIn",
                  },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Ready to start a new journey</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Main image container with bottom blur effect */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] lg:w-[400px] lg:h-[500px]">
                {/* Image container */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/esau.png"
                    alt="Esaú Pérez - Software Developer"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    priority
                  />

                  {/* Bottom blur overlay - seamless merge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"></div>

                  {/* Enhanced bottom fade for seamless integration */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

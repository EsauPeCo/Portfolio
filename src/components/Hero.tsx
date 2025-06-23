"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem, Parallax } from "@/components/ui/scroll-animations";

export function Hero() {
  const highlightPaw = () => {
    window.dispatchEvent(new Event('highlightPaw'));
  };

  // Ensure page starts at top on mobile devices
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration on page reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-20 md:pt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <StaggerContainer className="space-y-8 text-center lg:text-left order-2 lg:order-1" staggerDelay={0.2}>
            {/* Main Heading */}
            <StaggerItem className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                Hi, I&apos;m{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                  initial={{ backgroundSize: "0% 100%" }}
                  animate={{ backgroundSize: "100% 100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  onClick={highlightPaw}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Esaú Pérez
                </motion.span>
              </motion.h1>
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Software Developer & Former Esports Professional
              </motion.h2>
            </StaggerItem>

            {/* Description */}
            <StaggerItem>
              <motion.p 
                className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Currently focusing on frontend technologies, building web
                applications with{" "}
                <span className="text-foreground font-semibold">React</span> &{" "}
                <span className="text-foreground font-semibold">TypeScript</span>
              </motion.p>
            </StaggerItem>

            {/* Call to Action Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/resume.pdf" download="Esaú_Pérez_Resume.pdf">
                    <Button size="lg" className="group cursor-pointer">
                      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                      Download Resume
                    </Button>
                  </a>
                </motion.div>
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
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <span>Ready to start a new journey</span>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn 
            direction="right" 
            delay={0.3}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <Parallax offset={20} className="relative group">
              {/* Main image container with bottom blur effect */}
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] lg:w-[400px] lg:h-[500px]">
                {/* Image container */}
                <motion.div 
                  className="relative w-full h-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={highlightPaw}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
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
                </motion.div>
              </div>
            </Parallax>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

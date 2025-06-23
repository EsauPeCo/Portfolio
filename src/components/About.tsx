"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with fade-in */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
        </FadeIn>

        {/* Content container with staggered text blocks */}
        <StaggerContainer className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300" staggerDelay={0.2}>
          <StaggerItem>
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I&apos;m an active software development student with hands-on experience
              building web applications. I&apos;m a tryhard at whatever I do, always
              trying to refine my current skills and acquire new ones
            </motion.p>
          </StaggerItem>

          <StaggerItem>
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My path here started with mechatronics engineering, took a five-year
              detour into professional Dota 2 competition, and now I&apos;m channeling
              that strategic thinking and pressure-handling experience into code.
              Each phase taught me something different about problem-solving,
              teamwork, and pushing through challenges.
            </motion.p>
          </StaggerItem>

          <StaggerItem>
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              But instead of telling you about my unconventional path, let&apos;s show
              you how it all connects.
            </motion.p>
          </StaggerItem>

          {/* Enhanced call-to-action scroll indicator */}
          <StaggerItem>
            <div className="pt-8">
              <motion.div 
                className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="text-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  ↓
                </motion.span>
                <span>Continue scrolling to see my journey</span>
              </motion.div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

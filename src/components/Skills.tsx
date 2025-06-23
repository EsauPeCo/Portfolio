"use client";

import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animations";
import { skillCategories } from "@/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories */}
        <StaggerContainer className="space-y-8" staggerDelay={0.1}>
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <StaggerItem key={category.title}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  {/* Category Header */}
                  <div className="flex items-center mb-4">
                    <CategoryIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="flex flex-col items-center text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          <SkillIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-2" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

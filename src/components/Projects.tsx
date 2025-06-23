"use client";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-animations";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Lock,
  Code2,
} from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real-world applications built with modern technologies
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          staggerDelay={0.2}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <StaggerItem key={index}>
                <motion.div
                  className={`bg-gradient-to-br ${project.cardColor} p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 h-full`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            project.links?.private
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
                              : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex space-x-2">
                      {project.links?.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </motion.a>
                      )}
                      {project.links?.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </motion.a>
                      )}
                      {project.links?.private && (
                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                          <Lock className="w-4 h-4 text-gray-500" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Code2 className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Core Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-600 font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Advanced Technologies (for enterprise project) */}
                  {project.advancedTech && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Advanced Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.advancedTech.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md font-medium"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Call to action */}
        <FadeIn delay={0.6} className="text-center mt-16">
          <motion.div
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm">More projects coming soon...</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              →
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

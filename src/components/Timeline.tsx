"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SlideIn,
  Parallax,
} from "@/components/ui/scroll-animations";
import { timelineEvents } from "@/data/timeline";

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Animated header section */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From mechatronics to esports to software development
            </p>
          </FadeIn>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <Parallax
              offset={30}
              className="absolute left-1/2 transform -translate-x-px h-full"
            >
              <motion.div
                className="h-full w-0.5 bg-gradient-to-b from-gray-300 via-primary/50 to-gray-300 dark:from-gray-600 dark:via-primary/50 dark:to-gray-600"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              />
            </Parallax>

            {/* Timeline events with staggered animation */}
            <StaggerContainer className="space-y-12" staggerDelay={0.15}>
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                const isLeft = event.side === "left";

                return (
                  <StaggerItem key={index}>
                    <div className="relative flex items-center w-full">
                      {/* Content with direction-based slide animation */}
                      <SlideIn
                        direction={isLeft ? "left" : "right"}
                        delay={0.2}
                        className={`w-5/12 ${
                          isLeft ? "pr-8 text-right" : "ml-auto pl-8 text-left"
                        }`}
                      >
                        <motion.div
                          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                          whileHover={{
                            scale: 1.02,
                            boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div
                            className={`flex items-center mb-3 ${
                              isLeft ? "justify-end" : "justify-start"
                            }`}
                          >
                            <motion.span
                              className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{
                                delay: 0.5,
                                type: "spring",
                                stiffness: 500,
                              }}
                              viewport={{ once: true }}
                            >
                              {event.year}
                            </motion.span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {event.description}
                          </p>
                        </motion.div>
                      </SlideIn>

                      {/* Center icon with bounce effect */}
                      <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div
                          className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-900`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Mobile Timeline with enhanced animations and connecting line */}
          <div className="md:hidden relative">
            {/* Mobile connecting line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600">
              <motion.div
                className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <StaggerContainer
              className="space-y-8 relative z-10"
              staggerDelay={0.1}
            >
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;

                return (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex items-start space-x-4 relative"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`w-10 h-10 ${event.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative z-20 ring-4 ring-white dark:ring-gray-900 shadow-lg`}
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 400,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <motion.div
                          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 relative"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* Small connecting arrow from line to card */}
                          <div className="absolute left-0 top-4 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-white dark:border-r-gray-800 -translate-x-2" />

                          <motion.span
                            className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {event.year}
                          </motion.span>
                          <h3 className="text-lg font-bold mt-2 mb-2 text-gray-800 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

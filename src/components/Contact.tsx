"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FieldProps } from "formik";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MessageCircle, User, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import { contactSchema, type ContactFormData } from "@/lib/validation";

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: unknown;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Initial form values
const initialValues: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (values: ContactFormData, { resetForm }: FormikHelpers<ContactFormData>) => {
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await axios.post<ApiResponse>('/api/contact', values, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      });

      const result = response.data;

      if (result.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        resetForm();
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error: unknown) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <StaggerContainer className="space-y-12" staggerDelay={0.2}>
          {/* Header */}
          <StaggerItem className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
            >
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Connect
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind or want to discuss opportunities? 
              I&apos;d love to hear from you!
            </motion.p>
          </StaggerItem>

          {/* Contact Form */}
          <StaggerItem>
            <FadeIn direction="up" delay={0.6}>
              <motion.div 
                className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border rounded-2xl p-8 md:p-12 shadow-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Formik
                  initialValues={initialValues}
                  validationSchema={contactSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form className="space-y-6">
                      {/* Name Field */}
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Label 
                          htmlFor="name" 
                          variant={errors.name && touched.name ? "error" : "default"}
                          className="flex items-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          Name
                        </Label>
                        <Field name="name">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="name"
                              type="text"
                              placeholder="Your full name"
                              variant={errors.name && touched.name ? "error" : "default"}
                              className="transition-all duration-200"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="name">
                          {(msg) => (
                            <motion.p 
                              className="text-sm text-destructive flex items-center gap-1"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              <AlertCircle className="w-3 h-3" />
                              {msg}
                            </motion.p>
                          )}
                        </ErrorMessage>
                      </motion.div>

                      {/* Email Field */}
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 }}
                      >
                        <Label 
                          htmlFor="email" 
                          variant={errors.email && touched.email ? "error" : "default"}
                          className="flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </Label>
                        <Field name="email">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              variant={errors.email && touched.email ? "error" : "default"}
                              className="transition-all duration-200"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="email">
                          {(msg) => (
                            <motion.p 
                              className="text-sm text-destructive flex items-center gap-1"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              <AlertCircle className="w-3 h-3" />
                              {msg}
                            </motion.p>
                          )}
                        </ErrorMessage>
                      </motion.div>

                      {/* Message Field */}
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <Label 
                          htmlFor="message" 
                          variant={errors.message && touched.message ? "error" : "default"}
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Message
                        </Label>
                        <Field name="message">
                          {({ field }: FieldProps) => (
                            <Textarea
                              {...field}
                              id="message"
                              placeholder="Tell me about your project or just say hello..."
                              variant={errors.message && touched.message ? "error" : "default"}
                              rows={6}
                              className="transition-all duration-200 min-h-[120px]"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="message">
                          {(msg) => (
                            <motion.p 
                              className="text-sm text-destructive flex items-center gap-1"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                            >
                              <AlertCircle className="w-3 h-3" />
                              {msg}
                            </motion.p>
                          )}
                        </ErrorMessage>
                      </motion.div>

                      {/* Status Message */}
                      {statusMessage && (
                        <motion.div 
                          className={`flex items-center gap-2 p-4 rounded-lg ${
                            status === 'success' 
                              ? 'bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                              : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {status === 'success' ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <AlertCircle className="w-4 h-4" />
                          )}
                          {statusMessage}
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting || status === 'loading'}
                          className="w-full group"
                        >
                          {isSubmitting || status === 'loading' ? (
                            <>
                              <motion.div
                                className="w-4 h-4 border-2 border-background border-t-transparent rounded-full mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            </FadeIn>
          </StaggerItem>

          {/* Additional Contact Info */}
          <StaggerItem>
            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <p className="text-muted-foreground">
                Or reach out directly at{" "}
                <a 
                  href="mailto:esau.peco.dev@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  esau.peco.dev@gmail.com
                </a>
              </p>
              <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <span>Usually responds within 24 hours</span>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

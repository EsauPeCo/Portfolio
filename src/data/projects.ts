import { User, Briefcase, LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  cardColor: string;
  technologies: string[];
  advancedTech?: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
    private?: boolean;
  };
  status: string;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing my journey from esports to software development. Features smooth scroll animations, dark mode, and a compelling timeline of my career transition.",
    icon: User,
    gradient: "from-blue-500 to-purple-600",
    cardColor:
      "from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Lucide Icons",
    ],
    features: [
      "Scroll-triggered animations",
      "Dark/Light mode toggle",
      "Responsive design",
      "Interactive timeline",
    ],
    links: {
      github: "https://github.com/EsauPeCo/Portfolio",
      live: "#", // Current site
    },
    status: "Live & Open Source",
  },
  {
    title: "Enterprise Accountancy Web Application",
    description:
      "A comprehensive business management system for an accountancy firm developed by our 3-person development team. I actively participated in the complete development lifecycle from requirements analysis to full implementation, contributing to database design, backend architecture, and frontend development. Features client management, financial reporting, document processing, and real-time data visualization with robust authentication and role-based access control. Happy to discuss technical details, team collaboration, and development process in an interview.",
    icon: Briefcase,
    gradient: "from-green-500 to-emerald-600",
    cardColor:
      "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "Node.js",
      "JWT Auth",
    ],
    advancedTech: [
      "TanStack Table",
      "Zustand",
      "Formik + Yup",
      "React Query",
      "Nodemailer",
    ],
    features: [
      "Client management system",
      "Financial reporting dashboard",
      "Document processing (Excel)",
      "Real-time data visualization",
      "Role-based authentication",
      "Email notifications",
      "Data virtualization",
    ],
    links: {
      private: true,
    },
    status: "Currently Developing",
  },
]; 
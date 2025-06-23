import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: IconType;
}

// Import Simple Icons for technology brands
import {
  // Frontend technologies
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  
  // Backend technologies  
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiPrisma,
  
  // Development tools
  SiGit,
  SiGithub,

  SiTrello,
  SiFigma,
  
  // Language icon
  SiGoogletranslate
} from "react-icons/si";

// Import Lucide icons for generic items and fallbacks
import {
  Monitor,
  Server,
  Settings,
  Database,
  MousePointer,
  Code
} from "lucide-react";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "HTML", icon: SiHtml5, category: "Frontend" },
      { name: "CSS", icon: SiCss3, category: "Frontend" },
      { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
      { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
      { name: "React", icon: SiReact, category: "Frontend" },
      { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
      { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
      { name: "Zustand", icon: Database, category: "Frontend" }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
      { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },
      { name: "MySQL", icon: SiMysql, category: "Backend" },
      { name: "Supabase", icon: SiSupabase, category: "Backend" },
      { name: "Prisma", icon: SiPrisma, category: "Backend" }
    ]
  },
  {
    title: "Development Tools",
    icon: Settings,
    skills: [
      { name: "Git", icon: SiGit, category: "Tools" },
      { name: "GitHub", icon: SiGithub, category: "Tools" },
      { name: "VSCode", icon: Code, category: "Tools" },
      { name: "Cursor", icon: MousePointer, category: "Tools" },
      { name: "Trello", icon: SiTrello, category: "Tools" },
      { name: "Figma", icon: SiFigma, category: "Tools" }
    ]
  },
  {
    title: "Languages",
    icon: SiGoogletranslate,
    skills: [
      { name: "Spanish", icon: SiGoogletranslate, category: "Languages" },
      { name: "English", icon: SiGoogletranslate, category: "Languages" }
    ]
  }
]; 
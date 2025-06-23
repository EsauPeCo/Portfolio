import {
  Code,
  Gamepad2,
  Trophy,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  LucideIcon,
} from "lucide-react";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  side: "left" | "right";
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Early Years",
    title: "Love for Technology & Competition",
    description:
      "My passion for technology, videogames, and competition has been constant throughout my life. I always knew technology would play a major role in my future.",
    icon: Heart,
    color: "bg-red-500",
    side: "left",
  },
  {
    year: "2014",
    title: "Started Mechatronics Engineering",
    description:
      "Began my studies at Tecnológico Nacional de México, diving deep into the intersection of mechanical, electrical, and computer engineering. Completed 70% of the degree, building a strong foundation in problem-solving and technical thinking.",
    icon: GraduationCap,
    color: "bg-blue-500",
    side: "right",
  },
  {
    year: "2018",
    title: "The Leap of Faith",
    description:
      "Put my studies on hold to pursue my dream of becoming a professional esports player. What was supposed to be a 1-year break to 'give it a shot' turned into something much bigger than I ever imagined.",
    icon: Gamepad2,
    color: "bg-purple-500",
    side: "left",
  },
  {
    year: "2018-2024",
    title: "5 Years of Professional Esports",
    description:
      "Competed internationally in Dota 2 at the highest level, traveling the world and facing the best teams globally. While I didn't achieve the ultimate goal I set for myself, I gained invaluable experience in teamwork, strategic thinking, and performing under intense pressure.",
    icon: Trophy,
    color: "bg-yellow-500",
    side: "right",
  },
  {
    year: "2024",
    title: "Time for a New Chapter",
    description:
      "Realized I was getting too old for competitive esports and wanted to build a long-lasting career. Retired from professional gaming and enrolled in Software Development, bringing maturity and clear vision of what I wanted to achieve.",
    icon: Code,
    color: "bg-green-500",
    side: "left",
  },
  {
    year: "2025",
    title: "First Professional Opportunity",
    description:
      "One year into my studies, landed my first role as a part-time Software Developer. Currently building a custom web application for an accountancy firm, applying everything I've learned while continuing my education.",
    icon: Briefcase,
    color: "bg-indigo-500",
    side: "right",
  },
  {
    year: "Future",
    title: "Here to Build the Future",
    description:
      "I want to become a great software developer, deepening my knowledge in full-stack development and intrigued to later explore cutting-edge technologies in the AI/ML sector.",
    icon: Rocket,
    color: "bg-orange-500",
    side: "left",
  },
]; 
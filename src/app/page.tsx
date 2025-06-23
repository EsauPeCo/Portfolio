import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

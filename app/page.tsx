"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Github,
  Linkedin,
  // Twitter,
  Mail,
  Download,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import project1 from "@/public/assets/lms.png";
import project2 from "@/public/assets/habit tracker.png";
import project3 from "@/public/assets/3DProductShowcase.png";
import { ContactForm } from "@/components/Contactform";

// --- DATA ---
const NAV_LINKS = ["Work", "Projects", "Skills", "Contact"];

const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "OpenAI",
  "LangChain",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Vercel",
  "Framer Motion",
  "Redux",
  "MongoDB",
  "Git",
];

const PROJECTS = [
  {
    title: "Lead Management System with AI Scoring",
    description:
      "Full-stack CRM with AI-powered lead scoring that increased conversion rates by 15%. Features real-time tracking and automated lead prioritization.",
    tags: ["Next.js 14", "TypeScript", "Python FastAPI", "OpenAI"],
    // image:
    //   "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    image: project1,
    demo: "https://sallah-lms.vercel.app/dashboard",
    github: "#",
  },
  {
    title: "Habit Tracker with Gamification",
    description:
      "Productivity app tracking user streaks with smooth GPU-accelerated animations.",
    tags: ["React", "ShadCN/UI", "Framer Motion", "Zustand", "OpenAI"],
    // image:
    //   "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    image: project2,
    demo: "https://habit-tracker-steel-nine.vercel.app/",
    github: "#",
  },
  {
    title: "3D Product Showcase ",
    description:
      "Interactive 3D product showcase built with React Three Fiber. Users can explore products in 3D with smooth animations and AI-generated descriptions.",
    tags: ["Next.js", "Three.js", "Framer Motion", "PostgreSQL"],
    image:
      // "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      project3,
    demo: "#",
    github: "#",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "1techlink",
    date: "Mar 2025 - Present",
    points: [
      "Engineered Lead Management System with AI scoring, reducing manual data entry by 30%",
      "Integrated OpenAI/LangChain for intelligent lead prioritization, boosting conversions 15%",
      "Optimized Core Web Vitals achieving 40% faster load times via React Server Components",
      "Built Python FastAPI microservices for ML data preprocessing (200ms response improvement)",
    ],
  },
  {
    role: "Frontend Engineer (Open Source)",
    company: "PlaceAm",
    date: "Apr 2024 - Oct 2024",
    points: [
      "Developed reusable UI components for Web3 libraries used by 100+ dApp developers",
      "Resolved critical rendering bottlenecks, reducing open issues by 10%",
      "Collaborated with AI/ML team on data visualization pipelines for blockchain datasets",
    ],
  },
  {
    role: "Technical Lead",
    company: "1techacademy",
    date: "Feb 2024 - Aug 2024",
    points: [
      "Directed technical training for 20+ developers in React ecosystem",
      "Mentored cohort through 10+ production deployments on Vercel",
      "Introduced AI-assisted development workflows with LLM APIs",
    ],
  },
];

const SKILLS = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Tailwind CSS",
    "Framer Motion",
    "ShadCN/UI",
    "Redux",
    "Zustand",
  ],
  Backend: [
    "Node.js",
    "Python (FastAPI)",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
  ],
  "AI/ML": [
    "OpenAI API",
    "LangChain",
    "Prompt Engineering",
    "Embeddings",
    "RAG",
  ],
  Tools: [
    "Git",
    "Docker",
    "Vercel",
    "AWS (RDS)",
    "Figma",
    "Jest",
    "Cypress",
    "Postman",
  ],
};

// --- REUSABLE ANIMATION COMPONENT ---
const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 1. NAVIGATION */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter text-text-heading"
          >
            <span className="text-primary">F</span>O.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="/Favour_Olusesan_Frontend_Engineer_CV.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/50 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-heading"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-card border-b border-border py-4 px-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 text-primary mt-2"
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* 2. HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
          <FadeIn>
            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <p className="text-primary font-mono text-xl md:text-2xl font-bold tracking-wide">
                  👋 Hi, I&apos;m
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-text-heading tracking-tight">
                  Favour Olusesan
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
                  Frontend Engineer building React/Next.js apps with{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
                    AI capabilities
                  </span>
                  .
                </h2>
                <p className="text-lg max-w-2xl leading-relaxed">
                  3+ years crafting high-performance web applications. I bridge
                  design and engineering while integrating AI/LLM APIs to build
                  smarter user experiences.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-transform hover:scale-105"
                  >
                    View Work
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border border-border text-text-heading rounded-full font-medium hover:border-primary/50 hover:bg-primary/5 transition-all"
                  >
                    Contact Me
                  </a>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8 pt-10 border-t border-border/50 mt-10">
                  <div>
                    <h4 className="text-2xl font-bold text-text-heading">3+</h4>
                    <p className="text-sm">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-heading">
                      10+
                    </h4>
                    <p className="text-sm">Projects Shipped</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-text-heading">
                      10+
                    </h4>
                    <p className="text-sm">Mentored Devs</p>
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110"></div>
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 relative z-10 bg-card">
                  {/* Optional: Add actual image path below */}
                {/* <div className="w-full h-full bg-linear-to-tr from-card to-border flex items-center justify-center text-4xl font-bold text-border">
                    FO
                  </div> */}
                 {/* <img src="/assets/avatar.png" alt="Favour Olusesan" className="w-full h-full object-cover" /> */}
                 <Image src="/assets/profile.png" alt="Favour Olusesan" width={256} height={256} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 3. TECH STACK MARQUEE */}
        <section className="py-10 -mx-6 md:-mx-20 overflow-hidden relative border-y border-border/50 bg-card/30">
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />

          <div className="flex w-[200%] animate-marquee">
            <div className="flex flex-1 justify-around items-center gap-4 px-4">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-mono whitespace-nowrap text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Duplicate for infinite loop */}
            <div className="flex flex-1 justify-around items-center gap-4 px-4">
              {TECH_STACK.map((tech) => (
                <span
                  key={`${tech}-dup`}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-mono whitespace-nowrap text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURED PROJECTS */}
        <section id="projects" className="py-24">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-bold text-text-heading mb-12">
              Featured Projects
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:-translate-y-1">
                  {/* Image Placeholder */}
                  <div className="relative w-full aspect-video bg-border overflow-hidden">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        typeof project.image === "string"
                          ? project.image
                          : project.image.src
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-xl font-bold text-text-heading mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm mb-6 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 bg-background rounded-md text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto border-t border-border pt-4">
                      <a
                        href={project.demo}
                        className="text-sm font-medium text-text-heading hover:text-primary flex items-center gap-1 transition-colors"
                      >
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                      {/* <a
                        href={project.github}
                        className="text-sm font-medium hover:text-text-heading flex items-center gap-1 transition-colors"
                      >
                        <Github size={16} /> GitHub
                      </a> */}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 5. WORK EXPERIENCE */}
        <section id="work" className="py-24">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-bold text-text-heading mb-12">
              Experience
            </h3>
          </FadeIn>

          <div className="max-w-3xl relative border-l border-border ml-3 md:ml-0 space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-text-heading">
                      {exp.role}{" "}
                      <span className="text-primary">@ {exp.company}</span>
                    </h4>
                    <span className="text-sm font-mono text-gray-400 bg-card px-3 py-1 rounded-full border border-border w-fit">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed flex items-start gap-3"
                      >
                        <span className="text-primary mt-1.5 text-[10px]">
                          ▶
                        </span>{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 6. SKILLS SECTION */}
        <section id="skills" className="py-24">
          <FadeIn>
            <h3 className="text-3xl md:text-4xl font-bold text-text-heading mb-12">
              Skills
            </h3>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, skills], idx) => (
              <FadeIn key={category} delay={idx * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 transition-colors">
                  <h4 className="text-lg font-bold text-text-heading mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />{" "}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* 7 & 8. OPEN SOURCE & CONTACT */}
        <section id="contact" className="py-24 border-t border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Currently available for freelance opportunities
                </div>

                <h3 className="text-4xl font-bold text-text-heading mb-4">
                  Let&apos;s build something together.
                </h3>
                <p className="mb-8 max-w-md">
                  Whether you have a project in mind, need frontend architecture
                  consulting, or want to integrate AI into your app, I&apos;m
                  ready to help.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:Olusesanfavour22@gmail.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors w-fit"
                  >
                    <Mail size={20} /> Olusesanfavour22@gmail.com
                  </a>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/placeamweb3"
                      className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all"
                    >
                      <Github size={20} />
                    </a>
                    {/* https://www.linkedin.com/in/olusesan-favour-6757252a4/
                     */}
                    <a
                      href="https://www.linkedin.com/in/olusesan-favour-6757252a4/"
                      target="_blank"
                      className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    {/* <a
                      href="#"
                      className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all"
                    >
                      <Twitter size={20} />
                    </a> */}
                  </div>
                </div>

                {/* Open Source Highlight */}
                {/* <div className="p-6 bg-card border border-border rounded-xl mt-12">
                  <h4 className="font-bold text-text-heading mb-2">
                    Open Source Contributions
                  </h4>
                  <p className="text-sm mb-2">
                    Active contributor to Web3 libraries (Vynixlab) and UI
                    components for blockchain data visualization.
                  </p>
                  <p className="text-sm font-mono text-primary">
                    ★ 100+ GitHub contributions in 2025
                  </p>
                </div> */}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="border-t border-border/50 bg-background py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-mono text-gray-500">
            © 2026 Favour Olusesan. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            Built with Next.js • Tailwind • Framer Motion
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

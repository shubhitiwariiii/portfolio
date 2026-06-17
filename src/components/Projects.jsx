import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "HealthLens — AI Medical Report Analyzer",
      description:
        "Upload a medical report and get a plain-English explanation of what it says. Built for patients who don't speak doctor.",
      tech: ["React 19", "Node.js", "Firebase", "Gemini AI", "Tailwind CSS"],
      github: "https://github.com/AnubhavGitHub07/HealthLens",
      demo: "#",
      highlights: [
        "Built at HackDays 2026",
        "AI-powered report explanation",
        "Patient-friendly medical insights",
      ],
    },
    {
      title: "FirstGen Guidance — AI Scholarship Platform",
      description:
        "AI-powered scholarship and career guidance for first-generation Indian students. 600M+ Indians miss scholarships they qualify for — simply because no one told them.",
      tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Tailwind CSS"],
      github: "https://github.com/shubhitiwariiii/first-gen-guidance",
      demo: "https://first-gen-guidance.vercel.app",
      highlights: [
        "AI scholarship finder",
        "Peer mentor matching",
        "Multi-step onboarding",
        "Live on Vercel",
      ],
    },
    {
      title: "Daily Wage Tracker — MERN Stack",
      description:
        "Full-stack wage and attendance management system for contractors and workers.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/shubhitiwariiii/daily-wage-tracker",
      demo: "#",
      highlights: [
        "JWT Authentication",
        "Attendance Management",
        "PDF Report Generation",
        "MongoDB Atlas",
      ],
    },
    {
      title: "Personalized Voice Assistant",
      description:
        "Not another Siri clone. This assistant remembers past conversations and uses memory in future responses, powered by a local LLM.",
      tech: ["Python", "Scikit-learn", "Ollama Llama3", "Tkinter"],
      github: "https://github.com/shubhitiwariiii/personalized-voice-assistant",
      demo: "#",
      highlights: [
        "Speech I/O",
        "Naive Bayes intent classification",
        "Persistent memory",
        "Local LLM",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="section-shell max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-yellow-50/75 mb-6 max-w-2xl"
      >
        Selected work focused on building useful interfaces, practical AI, and
        full-stack systems.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative bg-black/70 backdrop-blur-xl border border-yellow-400/15 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-yellow-300/35 hover:shadow-[0_0_18px_rgba(250,204,21,0.08)] transition-all duration-300"
          >
            <div className="h-1 w-full bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500" />

            <div className="p-6 relative">
              <span className="absolute top-4 right-4 text-sm font-mono text-yellow-100/35">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-semibold mb-4 pr-10 text-yellow-50">
                {project.title}
              </h3>

              <p className="text-yellow-50/75 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="bg-black/70 text-yellow-100 rounded-full px-2 py-0.5 text-xs border border-yellow-400/15"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-100 text-sm border border-yellow-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/70 text-yellow-100 hover:text-yellow-200 hover:bg-black/85 transition-colors duration-200 border border-yellow-400/15"
                  aria-label="GitHub Repository"
                >
                  <Code2 size={18} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/70 text-yellow-100 hover:text-yellow-200 hover:bg-black/85 transition-colors duration-200 border border-yellow-400/15"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;

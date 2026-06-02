import { motion } from "framer-motion";
import { Code2, Layout, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "HTML/CSS"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Gemini AI", "Ollama/Llama3", "Scikit-learn"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell relative py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-yellow-400/8 via-yellow-300/5 to-transparent blur-[140px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="display-font text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-yellow-50/75 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`group bg-black/70 backdrop-blur-xl border border-yellow-400/15 rounded-2xl p-6 hover:border-yellow-300/25 hover:shadow-[0_0_24px_-8px_rgba(250,204,21,0.08)] transition-all duration-300 ${category.title === 'Tools' ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-yellow-500/10 text-yellow-200 group-hover:bg-yellow-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="display-font text-yellow-50 font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-yellow-500/10 text-yellow-100 rounded-full px-3 py-1.5 text-sm font-medium border border-yellow-500/15 hover:bg-yellow-500/20 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

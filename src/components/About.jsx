import { motion } from "framer-motion";
import { Download } from "lucide-react";

const infoCards = [
  {
    emoji: "🎓",
    title: "Education",
    value: "B.Tech Computer Science — CGPA: 8",
    subtitle: "Specialization: AI & ML",
  },
  {
    emoji: "📍",
    title: "Location",
    value: "Greater Noida, India",
    subtitle: "Open to Remote",
  },
  {
    emoji: "⚡",
    title: "Interests",
    value: "AI, Web Dev, DSA",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section-shell relative py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-yellow-400/10 via-yellow-300/6 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-yellow-400/8 via-yellow-300/5 to-transparent blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="display-font text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-yellow-50/75 text-lg max-w-2xl mx-auto">
            A quick snapshot of what I build, what I enjoy, and how I like to work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
              <p className="text-yellow-50 text-lg leading-relaxed">
                I build production-oriented web applications and AI integrations that
                solve specific problems — for example, tools that make medical information
                easier to understand or automation that saves time for small teams.
              </p>
              <p className="text-yellow-100/70 text-lg leading-relaxed">
                Recent highlights: <strong>ai-spend-audit</strong> (cost-analysis tooling),
                <strong>HealthLens</strong> (medical-report summarizer built at HackDays),
                and Daily-wage tracker app - Full-stack wage and attendance management system for contractors and workers. Built for those who don't speak spreadsheet..
              </p>

            <motion.a
              href="mailto:shubhitiwari0132@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-100 font-medium hover:bg-yellow-400/20 hover:border-yellow-300/60 transition-all duration-300 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="group bg-black/70 backdrop-blur-xl border border-yellow-400/15 rounded-2xl p-5 hover:border-yellow-400/25 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.08)] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{card.emoji}</span>
                  <div>
                    <p className="text-sm text-yellow-200/55 font-medium uppercase tracking-wider">
                      {card.title}
                    </p>
                    <p className="text-yellow-50 font-semibold text-lg">{card.value}</p>
                    {card.subtitle && (
                      <p className="text-yellow-100/70 text-sm mt-0.5">{card.subtitle}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

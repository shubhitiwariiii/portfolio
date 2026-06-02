import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Link2, Mail, ChevronDown, Sparkles, MapPin, BadgeCheck } from "lucide-react";

const roles = ["AI & Full-Stack Developer", "Full Stack Developer", "Problem Solver"];

// Stats: use real counts where possible. Updated per request.
const stats = [
  { target: 300, label: "DSA Problems", suffix: "+" },
  { target: 3, label: "Projects", suffix: "+" },
];

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-24 sm:pt-28 flex items-center justify-center relative overflow-hidden section-shell">
      <div className="hero-dot-grid" />
      <div className="absolute top-16 left-6 sm:left-16 w-52 sm:w-72 h-52 sm:h-72 bg-yellow-400/10 blur-3xl rounded-full" />
      <div className="absolute top-16 right-6 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-yellow-300/6 blur-3xl rounded-full" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <p className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-yellow-100 text-sm mb-5 shadow-[0_0_20px_rgba(250,204,21,0.08)]">
              Hello, I&apos;m Shubhi
            </p>

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-200 text-sm mb-6">
              Available for Opportunities 🚀
            </div>

            <h1 className="display-font text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-tight bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent max-w-3xl">
              Shubhi
              <br />
              Tiwari
            </h1>

            <div className="mt-6 h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="display-font text-lg sm:text-xl text-yellow-100 font-medium tracking-wide"
                >
                  {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="mt-5 text-yellow-50 text-base sm:text-lg max-w-xl leading-relaxed">
              Building AI-powered applications and solving real-world problems with code.
              Focused on strong UI, practical systems, and useful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-300 text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] transition-all duration-300 font-semibold"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-yellow-400/30 text-yellow-100 hover:bg-yellow-400/10 hover:border-yellow-300/50 transition-all duration-300 font-semibold"
              >
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 max-w-2xl">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-yellow-400/20 bg-black/70 backdrop-blur-md px-4 py-4">
                  <h3 className="display-font text-2xl sm:text-3xl font-bold text-yellow-200">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </h3>
                  <p className="text-yellow-100/70 text-xs sm:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {[
                { icon: Code2, href: "https://github.com/shubhitiwariii", label: "GitHub" },
                { icon: Link2, href: "https://linkedin.com/in/shubhitiwariii", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shubhitiwari0132@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl border border-yellow-400/20 bg-black/55 text-yellow-100 hover:text-yellow-200 hover:border-yellow-300/50 hover:shadow-[0_0_16px_rgba(250,204,21,0.12)] transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-300/5 blur-2xl" />
            <div className="relative rounded-[2rem] border border-yellow-400/20 bg-black/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.45)] overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-500" />

              <div className="flex items-center gap-3 text-yellow-100/90 mb-6">
                <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 p-2">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-yellow-200/70">Snapshot</p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-yellow-50">What I&apos;m building</h3>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: BadgeCheck, title: "AI + Web Apps", text: "Turning ideas into practical products with clean UI and fast interaction." },
                  { icon: MapPin, title: "Open to Opportunities", text: "Available for internships, freelance work, and collaborative projects." },
                  { icon: Code2, title: "Tech Focus", text: "React, JavaScript, Node, and problem-solving with DSA fundamentals." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-yellow-400/15 bg-black/70 p-4 sm:p-5 hover:border-yellow-300/30 transition-colors duration-300">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border border-yellow-400/15 bg-yellow-400/10 p-2 text-yellow-100">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-yellow-50 font-semibold">{title}</h4>
                        <p className="mt-1 text-sm sm:text-[15px] leading-relaxed text-yellow-100/70">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-yellow-100/80">
                {[
                  "UI polish",
                  "Problem solving",
                  "Clean code",
                  "Responsive design",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-yellow-400/15 bg-black/70 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-200/70 hover:text-yellow-200 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}

export default Hero;

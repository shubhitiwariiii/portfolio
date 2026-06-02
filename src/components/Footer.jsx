import { motion } from "framer-motion";
import { Code2, Link2, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black/70">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col items-center gap-6 text-center"
      >
        <div className="flex gap-5">
          <a
            href="https://github.com/shubhitiwariii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-100/70 hover:text-yellow-200 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Code2 size={20} />
          </a>
          <a
            href="https://linkedin.com/in/shubhitiwariii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-100/70 hover:text-yellow-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Link2 size={20} />
          </a>
          <a
            href="mailto:shubhitiwari0132@gmail.com"
            className="text-yellow-100/70 hover:text-yellow-200 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-yellow-100/65 text-sm">
          © 2026 Shubhi Tiwari. All rights reserved.
        </p>

        <p className="text-yellow-100/45 text-xs">
          Built with ❤️ and lots of ☕
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;

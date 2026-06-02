import { motion } from "framer-motion";
import { Mail, MapPin, Code2, Link2 } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-shell relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
      <div className="absolute top-20 -left-40 w-80 h-80 bg-yellow-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-yellow-300/5 rounded-full blur-3xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="display-font text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-yellow-50/75 mb-6 max-w-2xl"
      >
        Have a project in mind or just want to connect? Feel free to reach out!
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-4 bg-black/70 backdrop-blur-xl border border-yellow-400/15 rounded-xl p-5 hover:border-yellow-300/35 transition-colors duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10">
              <Mail className="text-yellow-200" size={22} />
            </div>
            <div>
              <p className="text-sm text-yellow-200/55">Email</p>
              <a
                href="mailto:shubhitiwari0132@gmail.com"
                className="text-yellow-50 hover:text-yellow-200 transition-colors"
              >
                shubhitiwari0132@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-black/70 backdrop-blur-xl border border-yellow-400/15 rounded-xl p-5 hover:border-yellow-300/35 transition-colors duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10">
              <MapPin className="text-yellow-200" size={22} />
            </div>
            <div>
              <p className="text-sm text-yellow-200/55">Location</p>
              <p className="text-yellow-50">India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-black/70 backdrop-blur-xl border border-yellow-400/15 rounded-xl p-5 hover:border-yellow-300/35 transition-colors duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10">
              <span className="text-yellow-200 text-lg">🔗</span>
            </div>
            <div>
              <p className="text-sm text-yellow-200/55 mb-2">Socials</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/shubhitiwariiii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-black/70 px-3 py-2 text-yellow-100 hover:text-yellow-200 hover:bg-black/85 transition-colors duration-200 border border-yellow-400/15"
                >
                  <Code2 size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shubhi-tiwari-664553329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-black/70 px-3 py-2 text-yellow-100 hover:text-yellow-200 hover:bg-black/85 transition-colors duration-200 border border-yellow-400/15"
                >
                  <Link2 size={18} />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/shubhiitiwari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-black/70 px-3 py-2 text-yellow-100 hover:text-yellow-200 hover:bg-black/85 transition-colors duration-200 border border-yellow-400/15"
                >
                  <Link2 size={18} />
                  <span className="text-sm">Leetcode</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-black/75 backdrop-blur-xl border border-yellow-400/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl shadow-yellow-950/8"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-yellow-200/55 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="bg-black/70 border border-yellow-400/15 rounded-xl px-4 py-3 text-yellow-50 focus:border-yellow-300 focus:outline-none transition w-full placeholder:text-yellow-100/25"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-yellow-200/55 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="bg-black/70 border border-yellow-400/15 rounded-xl px-4 py-3 text-yellow-50 focus:border-yellow-300 focus:outline-none transition w-full placeholder:text-yellow-100/25"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-yellow-200/55 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                className="bg-black/70 border border-yellow-400/15 rounded-xl px-4 py-3 text-yellow-50 focus:border-yellow-300 focus:outline-none transition w-full resize-none placeholder:text-yellow-100/25"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-yellow-300 text-black font-semibold hover:shadow-[0_8px_28px_rgba(250,204,21,0.18)] transition-all duration-200 cursor-pointer border border-yellow-400/30"
            >
              Let's Talk
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

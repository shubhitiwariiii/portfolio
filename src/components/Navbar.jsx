import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/82 border-yellow-400/15 shadow-lg shadow-black/55"
            : "backdrop-blur-md bg-black/28 border-yellow-400/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
          {/* Logo */}
          <a
            href="#"
            className="group text-lg font-bold text-yellow-300 transition-all duration-300 tracking-wide display-font"
          >
            <span className="group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:via-yellow-300 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              ShubhiTiwariDev
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6 lg:gap-8 text-sm items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-yellow-100/75 hover:text-yellow-300 transition-colors duration-300 py-2 px-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-yellow-100 hover:bg-yellow-400/20 hover:border-yellow-300/50 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-100/75 hover:text-yellow-300 transition-colors duration-300 relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-xl bg-black/92 flex items-center justify-center md:hidden px-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="text-3xl font-semibold text-yellow-50 hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-6 py-3 text-yellow-100 hover:bg-yellow-400/20 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

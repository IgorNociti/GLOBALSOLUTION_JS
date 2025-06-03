import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import Logo from "../assets/Logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-green-900 to-emerald-950 text-gray-200 py-16 md:py-20 relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-green-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col items-center">
          <motion.div
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <Link to="/" className="mb-4">
              <motion.img
                src={Logo}
                className="h-32 w-auto"
                alt="Logo Bueiro Inteligente"
                whileHover={{ rotate: 3 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-lg md:text-xl font-semibold text-emerald-400 drop-shadow-md max-w-xs text-center leading-snug tracking-wide">
              O sensor que irá mudar o futuro.
            </p>

            {/* Ícones sociais */}
            <div className="flex gap-8 mt-6">
              <a
                href="https://twitter.com/seu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-emerald-400 hover:text-emerald-300 transition"
              >
                <Twitter size={28} />
              </a>
              <a
                href="https://linkedin.com/in/seu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-emerald-400 hover:text-emerald-300 transition"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/seu_usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-emerald-400 hover:text-emerald-300 transition"
              >
                <Github size={28} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-green-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Smart sensor.</p>
        </div>
      </div>
    </motion.footer>
  );
}

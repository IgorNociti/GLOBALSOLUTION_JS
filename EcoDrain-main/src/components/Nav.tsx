import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 transition-shadow duration-300 ${
        shadow ? "shadow-lg" : ""
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20 relative">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-between w-full relative">
            {/* Left links */}
            <div className="flex space-x-8 flex-1 justify-start">
              {["/solucao", "/sobre"].map((path, idx) => (
                <motion.div
                  key={idx}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-lg font-semibold tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "bg-emerald-700 text-emerald-300 shadow-lg"
                          : "text-emerald-200 hover:bg-emerald-700 hover:text-emerald-400"
                      }`
                    }
                  >
                    {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
              <motion.img
                src={Logo}
                className="h-24 w-auto drop-shadow-lg"
                alt="Logo Smart Sensor"
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Right links */}
            <div className="flex space-x-8 flex-1 justify-end">
              {["/login", "/cadastrar"].map((path, idx) => (
                <motion.div
                  key={idx}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-lg font-semibold tracking-wide border border-emerald-700 text-emerald-200 transition-colors duration-300 ${
                        isActive
                          ? "bg-emerald-700 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                          : "hover:bg-emerald-700 hover:text-emerald-300 hover:shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                      }`
                    }
                  >
                    {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Abrir menu principal"
            >
              {isOpen ? (
                <XMarkIcon className="block h-7 w-7 text-emerald-300" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7 text-emerald-300" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-emerald-900 bg-opacity-95 backdrop-blur-md rounded-b-lg shadow-lg"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {["/solucao", "/sobre", "/login", "/cadastrar"].map((path, idx) => (
              <NavLink
                key={idx}
                to={path}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-lg font-semibold tracking-wide text-emerald-300 hover:bg-emerald-700 hover:text-emerald-100 transition-colors duration-200"
              >
                {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

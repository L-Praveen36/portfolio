// Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 py-4 px-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
          >
            Portfolio
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="font-medium text-white/70 hover:text-[#00F5D4] transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* Contact Button (Hide on small screens) */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-btn hidden md:block"
            >
              Contact Me
            </motion.a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="fixed inset-0 flex justify-end md:hidden z-40">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    />

    {/* Glass Panel */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        w-64
        h-full
        bg-white/10
        backdrop-blur-xl
        border-l border-white/20
        shadow-2xl
        flex flex-col
        items-center
        justify-center
        space-y-8
      "
    >
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setIsOpen(false)}
          className="text-white text-lg font-medium hover:text-[#00F5D4] transition"
        >
          {item}
        </a>
      ))}
    </motion.div>
  </div>
)}

    </>
  );
}

export default Navbar;

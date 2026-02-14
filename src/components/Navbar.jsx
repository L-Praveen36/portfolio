// Navbar.jsx
import React from "react";
import { motion } from "framer-motion";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
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

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
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

          {/* Optional Toggle (Now Styled Minimal)
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <div className="w-4 h-4 bg-[#00F5D4] rounded-full"></div>
          </button> */}

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-btn"
          >
            Contact Me
          </motion.a>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

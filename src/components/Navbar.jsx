// Navbar.jsx
import React from "react";
import { motion } from "framer-motion";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode ? "glass" : "glass-light"
      } py-4 px-6`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text"
        >
          Praveen.
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, color: "#6366f1" }}
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Dark Mode Toggle + Contact Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            {darkMode ? (
              // Sun Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 
                  4 0 11-8 0 4 4 0 018 0zm-.464 
                  4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 
                  1 0 00-1.414 1.414zm2.12-10.607a1 
                  1 0 010 1.414l-.706.707a1 1 0 
                  11-1.414-1.414l.707-.707a1 1 0 
                  011.414 0zM17 11a1 1 0 100-2h-1a1 
                  1 0 100 2h1zm-7 4a1 1 0 011 
                  1v1a1 1 0 11-2 0v-1a1 1 0 
                  011-1zM5.05 6.464A1 1 0 106.465 
                  5.05l-.708-.707a1 1 0 00-1.414 
                  1.414l.707.707zm1.414 
                  8.486l-.707.707a1 1 0 
                  01-1.414-1.414l.707-.707a1 1 0 
                  011.414 1.414zM4 11a1 1 0 
                  100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Moon Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 
                  016.707 2.707a8.001 8.001 0 
                  1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-medium ${
              darkMode
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-indigo-500 hover:bg-indigo-600"
            } text-white transition-colors`}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;

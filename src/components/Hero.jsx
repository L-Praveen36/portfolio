// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json"; // <-- your Lottie JSON

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="snap-section min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Background blur blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-purple-500 mix-blend-overlay filter blur-3xl floating"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl floating-delay-1"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl floating-delay-2"></div>
        </div>
      </div>

      {/* Main Content - Two columns */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20">
        
        {/* Left: Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <Lottie
            animationData={heroAnimation}
            loop={true}
            className="w-80 md:w-[400px] lg:w-[500px]"
          />
        </motion.div>

        {/* Right: Text + Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Lunavath Praveen Kumar</span>
          </h1>
          <p
            className={`text-lg md:text-2xl max-w-2xl mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            B.Tech Mathematics & Computing @ IIT Indore | Full-Stack &
            AI Enthusiast
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="#"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-500 hover:bg-indigo-600"
              } text-white glow-hover`}
            >
              My Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium ${
                darkMode
                  ? "glass hover:bg-gray-800"
                  : "glass-light hover:bg-gray-100"
              } glow-hover`}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

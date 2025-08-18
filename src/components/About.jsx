// AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

function AboutSection({ darkMode }) {
  return (
    <section id="about" className="snap-section min-h-screen relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-400"
            }`}
          ></div>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div
              className={`glass rounded-3xl p-8 hover-tilt glow-hover ${
                darkMode ? "" : "glass-light"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm a passionate developer and problem solver currently pursuing
                my B.Tech in Mathematics & Computing at IIT Indore. My journey
                in technology began with a curiosity about how things work,
                which evolved into a love for building digital solutions.
              </p>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With expertise in both frontend and backend development, I
                specialize in creating seamless, user-friendly web applications.
                My blockchain enthusiasm drives me to explore decentralized
                technologies and their potential to revolutionize industries.
              </p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                When I'm not coding, you can find me solving mathematical
                puzzles, contributing to open-source projects, or exploring new
                technologies in the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>

          {/* Animation + Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div
              className={`glass rounded-3xl p-8 hover-tilt glow-hover ${
                darkMode ? "" : "glass-light"
              }`}
            >
              {/* Lottie Animation (make sure lottie-player script is loaded in index.html) */}
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4isx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "300px" }}
                loop
                autoplay
              ></lottie-player>

              {/* Skills Pills */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                {[
                  { name: "Full-Stack Development", icon: "💻" },
                  { name: "Blockchain", icon: "⛓️" },
                  { name: "Problem Solving", icon: "🧩" },
                  { name: "Open Source", icon: "📦" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } flex items-center gap-2`}
                  >
                    <span>{item.icon}</span>
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

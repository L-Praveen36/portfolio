import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import Lottie from "lottie-react";

import heroAnimation from "../assets/hero-animation.json"; // <-- reuse hero lottie
import fullstackAnim from "../assets/fullstack.json";
import techAnim from "../assets/tech.json";
import problemAnim from "../assets/problem.json";
import visionaryAnim from "../assets/vision.json";

const skills = [
  {
    title: "Fullstack Developer",
    desc: "MERN stack, well versed with React, Node.js, MongoDB, RESTful API's etc.",
    anim: fullstackAnim,
  },
  {
    title: "Tech Enthusiast",
    desc: "Love new technologies and like to explore the field AI and ML.",
    anim: techAnim,
  },
  {
    title: "Problem Solver",
    desc: "Equipped with good analytical and problem solving skills. Creative thinker.",
    anim: problemAnim,
  },
  {
    title: "Visionary",
    desc: "A visionary with good creative qualities. Aiming to reach new heights.",
    anim: visionaryAnim,
  },
];

function AboutSection({ darkMode }) {
  return (
    <section id="about" className="relative min-h-screen py-20 overflow-visible">
      
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-24 left-24 w-40 h-40 rounded-full bg-purple-500 mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-24 right-24 w-52 h-52 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT: Text */}
          <div className="md:w-[65%] w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>

            <p
              className={`text-[1.15rem] leading-relaxed mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Hi there, I’m{" "}
              <span className="font-semibold text-blue-600">Praveen</span> — skilled
              in <span className="font-bold text-blue-600">Full stack web development</span>{" "}
              and quick to adapt to new environments. Strongly collaborative and
              interested in a <span className="font-bold text-blue-600">Software Developer</span>{" "}
              role to enhance product experiences.
            </p>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-indigo-600 rounded-full px-7 py-2 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              My Resume
            </a>
          </div>

          {/* RIGHT: Lottie animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[35%] w-full flex justify-center"
          >
            <Lottie
              animationData={heroAnimation}
              loop
              className="w-72 md:w-80 lg:w-96"
            />
          </motion.div>
        </div>

        {/* Skill Cards */}
        <LayoutGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className={`rounded-2xl p-6 ${
                  darkMode ? "glass" : "glass-light"
                } shadow-md flex flex-col items-center`}
                style={{ minHeight: "220px" }}
              >
                <Lottie
                  animationData={skill.anim}
                  loop={false}
                  className="w-20 h-20 mb-2"
                />
                <h4 className="text-lg font-bold mb-2 text-center">
                  {skill.title}
                </h4>
                <p
                  className={`text-center ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

export default AboutSection;

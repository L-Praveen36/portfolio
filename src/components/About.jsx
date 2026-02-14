import React from "react";
import { motion, LayoutGroup } from "framer-motion";
import Lottie from "lottie-react";

import heroAnimation from "../assets/hero-animation.json";
import fullstackAnim from "../assets/fullstack.json";
import techAnim from "../assets/tech.json";
import problemAnim from "../assets/problem.json";
import visionaryAnim from "../assets/vision.json";

const skills = [
  {
    title: "Fullstack Developer",
    desc: "MERN stack, well versed with React, Node.js, MongoDB, RESTful APIs etc.",
    anim: fullstackAnim,
  },
  {
    title: "Tech Enthusiast",
    desc: "Love exploring new technologies, especially AI and ML.",
    anim: techAnim,
  },
  {
    title: "Problem Solver",
    desc: "Strong analytical and problem solving mindset. Creative thinker.",
    anim: problemAnim,
  },
  {
    title: "Visionary",
    desc: "Creative and growth-oriented. Always aiming to reach new heights.",
    anim: visionaryAnim,
  },
];

function AboutSection() {
  return (
    <section id="about" className="section relative overflow-visible">

      {/* 🌊 Teal Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-24 left-24 w-40 h-40 rounded-full bg-[#00F5D4]/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="absolute bottom-24 right-24 w-52 h-52 rounded-full bg-teal-400/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* LEFT TEXT */}
          <div className="md:w-[65%] w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>

            <p className="text-[1.1rem] leading-relaxed mb-6 text-white/70">
              Hi there, I’m{" "}
              <span className="font-semibold text-[#00F5D4]">Praveen</span> — skilled
              in{" "}
              <span className="font-bold text-[#00F5D4]">
                Full Stack Web Development
              </span>{" "}
              and quick to adapt to new environments. Strongly collaborative and
              interested in a{" "}
              <span className="font-bold text-[#00F5D4]">
                Software Developer
              </span>{" "}
              role to enhance product experiences.
            </p>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-block"
            >
              My Resume
            </a>
          </div>

          {/* RIGHT ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[35%] w-full flex justify-center"
          >
            <div className="glass p-6">
              <Lottie
                animationData={heroAnimation}
                loop
                className="w-72 md:w-80 lg:w-96"
              />
            </div>
          </motion.div>
        </div>

        {/* Skill Cards */}
        <LayoutGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="glass p-6 flex flex-col items-center text-center"
                style={{ minHeight: "220px" }}
              >
                <Lottie
                  animationData={skill.anim}
                  loop={false}
                  className="w-20 h-20 mb-2"
                />
                <h4 className="text-lg font-bold mb-2 text-white">
                  {skill.title}
                </h4>
                <p className="text-white/70 text-sm">
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

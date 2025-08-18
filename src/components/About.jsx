import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Lottie from "lottie-react";
import { X } from "lucide-react";

// Import animations
import fullstackAnim from "../assets/fullstack.json";
import techAnim from "../assets/UIUX Designer.json";
import problemAnim from "../assets/UIUX Designer.json";
import visionaryAnim from "../assets/blockchain.json";

const skills = [
  {
    title: "Fullstack Developer",
    desc: "MERN stack, well versed with React, Node.js, MongoDB, RESTful API's etc.",
    details:
      "Experienced in designing and building full-stack web apps. Familiar with React, Node.js, MongoDB, and API integration for scalable solutions.",
    anim: fullstackAnim,
  },
  {
    title: "Tech Enthusiast",
    desc: "Love new technologies and like to explore the field AI and Image Processing.",
    details:
      "Always eager to learn and experiment with cutting-edge tech, especially in AI and image processing.",
    anim: techAnim,
  },
  {
    title: "Problem Solver",
    desc: "Equipped with good analytical and problem solving skills. Creative thinker.",
    details:
      "Competent in analytical reasoning and logical problem solving, with a creative mindset for tackling challenges.",
    anim: problemAnim,
  },
  {
    title: "Visionary",
    desc: "A visionary with good leadership qualities. Aiming to reach new heights.",
    details:
      "Focused on future goals, driven and ready to take initiative with leadership and adaptability.",
    anim: visionaryAnim,
  },
];

function AboutSection({ darkMode }) {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeCard !== null ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [activeCard]);

  return (
    <section id="about" className="relative min-h-screen py-20 overflow-hidden">
      {/* Floating background blobs (Hero theme) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-24 left-24 w-40 h-40 rounded-full bg-purple-500 mix-blend-overlay filter blur-3xl floating"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl floating-delay-1"></div>
          <div className="absolute bottom-24 right-24 w-52 h-52 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl floating-delay-2"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
        {/* Top About + Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* About Text */}
          <div className="md:w-[70%] w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p
              className={`text-[1.15rem] leading-relaxed mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Hi there, I’m{" "}
              <span className="font-semibold text-blue-600">Praveen</span> — skilled in{" "}
              <span className="font-bold text-blue-600">Full stack web development</span>{" "}
              and quick to adapt to new environments. Strongly collaborative and
              interested in a <span className="font-bold text-blue-600">Software Developer</span>{" "}
              role to enhance product experiences.
            </p>
            <a
              href="/Resume.pdf"
              download
              className="inline-block border border-indigo-600 rounded-full px-7 py-2 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              Resume
            </a>
          </div>

          {/* Profile Photo (enlarged) */}
          <div className="md:w-[30%] w-full flex justify-center">
            <div className="w-60 h-60 rounded-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 shadow-2xl">
              <img
                src="/Passport_Photo.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards + Modal in a shared layout group for smooth expansion */}
        <LayoutGroup>
          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, idx) => {
              const isActive = activeCard === idx;

              // While the modal is open for this card, render a hidden placeholder
              // to avoid duplicate layoutId mounts and preserve grid layout.
              if (isActive) {
                return (
                  <div
                    key={idx}
                    className="rounded-2xl p-6 opacity-0 pointer-events-none"
                    style={{ minHeight: "220px" }}
                  />
                );
              }

              return (
                <motion.div
                  key={idx}
                  layoutId={`card-${idx}`}
                  onClick={() => setActiveCard(idx)}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className={`cursor-pointer rounded-2xl p-6 ${
                    darkMode ? "glass" : "glass-light"
                  } shadow-md transition flex flex-col items-center`}
                  style={{ minHeight: "220px" }}
                >
                  <motion.div layoutId={`anim-${idx}`}>
                    <Lottie
                      animationData={skill.anim}
                      loop={false}
                      className="w-20 h-20 mb-2"
                    />
                  </motion.div>

                  <motion.h4
                    layoutId={`title-${idx}`}
                    className="text-lg font-bold mb-2 text-center"
                  >
                    {skill.title}
                  </motion.h4>

                  <motion.p
                    layoutId={`desc-${idx}`}
                    className={`text-center ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {skill.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* Modal (expands out from the card and collapses back) */}
          <AnimatePresence>
            {activeCard !== null && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.35 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black backdrop-blur-md z-40"
                  onClick={() => setActiveCard(null)}
                />

                {/* Expanded card as modal */}
                <motion.div
                  layoutId={`card-${activeCard}`}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    darkMode ? "glass" : "glass-light"
                  } rounded-3xl shadow-2xl px-8 py-9 flex flex-col items-center max-w-md w-[90%] relative`}
                  style={{ maxHeight: "90vh", overflowY: "auto" }}
                >
                  {/* X Close */}
                  <button
                    onClick={() => setActiveCard(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>

                  <motion.div layoutId={`anim-${activeCard}`}>
                    <Lottie
                      animationData={skills[activeCard].anim}
                      loop={true}
                      className="w-32 h-32 mb-4"
                    />
                  </motion.div>

                  <motion.h4
                    layoutId={`title-${activeCard}`}
                    className="text-2xl font-bold mb-3 text-center"
                  >
                    {skills[activeCard].title}
                  </motion.h4>

                  <motion.p
                    layoutId={`desc-${activeCard}`}
                    className={`text-center ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {skills[activeCard].details}
                  </motion.p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}

export default AboutSection;

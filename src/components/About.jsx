import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Lottie from "lottie-react";
import { X } from "lucide-react";

// Replace below with your actual Lottie animations
import fullstackAnim from "../assets/fullstack.json";
import techAnim from "../assets/UIUX Designer.json";
import problemAnim from "../assets/UIUX Designer.json";
import visionaryAnim from "../assets/blockchain.json";

const skills = [
  {
    title: "Fullstack Developer",
    desc: "MERN stack, well versed with React, Node.js, MongoDB, RESTful API's etc.",
    details: "Experienced in designing and building full-stack web apps. Familiar with React, Node.js, MongoDB, and API integration for scalable solutions.",
    anim: fullstackAnim,
  },
  {
    title: "Tech Enthusiast",
    desc: "Love new technologies and like to explore the field AI and Image Processing.",
    details: "Always eager to learn and experiment with cutting-edge tech, especially in AI and image processing.",
    anim: techAnim,
  },
  {
    title: "Problem Solver",
    desc: "Equipped with good analytical and problem solving skills. Creative thinker.",
    details: "Competent in analytical reasoning and logical problem solving, with a creative mindset for tackling challenges.",
    anim: problemAnim,
  },
  {
    title: "Visionary",
    desc: "A visionary with good leadership qualities. Aiming to reach new heights.",
    details: "Focused on future goals, driven and ready to take initiative with leadership and adaptability.",
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
    <section id="about" className="relative min-h-screen py-20 overflow-visible">
      {/* Decorative Blobs (optional, remove if not needed) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-24 left-24 w-40 h-40 rounded-full bg-purple-500 mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-24 right-24 w-52 h-52 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-[70%] w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className={`text-[1.15rem] leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Hi there, I’m <span className="font-semibold text-blue-600">Praveen</span> — skilled in <span className="font-bold text-blue-600">Full stack web development</span> and quick to adapt to new environments. Strongly collaborative and interested in a <span className="font-bold text-blue-600">Software Developer</span> role to enhance product experiences. Well-acquainted with HR methodologies.
            </p>
            <a
              href="/Resume.pdf"
              download
              className="inline-block border border-indigo-600 rounded-full px-7 py-2 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition"
            >
              Resume
            </a>
          </div>
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

        {/* Skill Cards */}
        <LayoutGroup>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 relative min-h-[260px] md:min-h-[260px] lg:min-h-[260px]">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                layout
                layoutId={`card-${idx}`}
                onClick={() => setActiveCard(idx)}
                whileHover={{
                  scale: activeCard === idx ? 1 : 1.05,
                  y: activeCard === idx ? 0 : -4,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className={`cursor-pointer rounded-2xl p-6 ${darkMode ? "glass" : "glass-light"} shadow-md flex flex-col items-center relative overflow-visible`}
                style={{ minHeight: "220px", zIndex: activeCard === idx ? 60 : 1 }}
              >
                <AnimatePresence>
                  {activeCard === idx ? (
                    <motion.div
                      layout
                      layoutId={`card-${idx}`}
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                        y: 40,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1.07,
                        y: -110, // Pops upwards above card (adjust as needed for your grid height)
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                        y: 40,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      className={`absolute left-1/2 top-0 transform -translate-x-1/2 rounded-3xl shadow-2xl px-8 py-9 flex flex-col items-center w-[340px] sm:w-[360px] glass`}
                      style={{
                        zIndex: 70,
                        background: darkMode ? "rgba(30,32,45,0.98)" : "rgba(255,255,255,0.97)",
                        boxShadow: "0 8px 32px rgba(32,32,64,0.25)",
                      }}
                    >
                      <button
                        onClick={() => setActiveCard(null)}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                      >
                        <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </button>
                      <motion.div layoutId={`anim-${idx}`} className="mb-4">
                        <Lottie animationData={skill.anim} loop={true} className="w-32 h-32 md:w-48 md:h-48" />
                      </motion.div>
                      <motion.h4 layoutId={`title-${idx}`} className="text-2xl font-bold mb-3 text-center">
                        {skill.title}
                      </motion.h4>
                      <motion.p layoutId={`desc-${idx}`} className={`text-center mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {skill.details}
                      </motion.p>
                    </motion.div>
                  ) : (
                    <>
                      <motion.div layoutId={`anim-${idx}`}>
                        <Lottie animationData={skill.anim} loop={false} className="w-20 h-20 mb-2" />
                      </motion.div>
                      <motion.h4 layoutId={`title-${idx}`} className="text-lg font-bold mb-2 text-center">{skill.title}</motion.h4>
                      <motion.p layoutId={`desc-${idx}`} className={`text-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {skill.desc}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            {/* Backdrop over page when modal is open */}
            <AnimatePresence>
              {activeCard !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.28 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black backdrop-blur-md z-40"
                  onClick={() => setActiveCard(null)}
                />
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

export default AboutSection;

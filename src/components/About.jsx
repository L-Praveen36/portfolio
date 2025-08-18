import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

import fullstackAnim from "../assets/fullstack.json";
import blockchainAnim from "../assets/blockchain.json";
import problemAnim from "../assets/UIUX Designer.json";
import opensourceAnim from "../assets/UIUX Designer.json";

function AboutSection({ darkMode }) {
  const [activeCard, setActiveCard] = useState(null);

  const skills = [
    {
      title: "Full-Stack Development",
      desc: "I design and build scalable, responsive web apps using modern frontend and backend frameworks.",
      details:
        "Experienced with React, Next.js, Node.js, Express, and databases like MongoDB & PostgreSQL. I focus on creating seamless user experiences with optimized performance.",
      anim: fullstackAnim,
      colors: "from-blue-200 to-blue-400",
    },
    {
      title: "Blockchain",
      desc: "Exploring decentralized technologies and smart contract development.",
      details:
        "Hands-on with Ethereum, Solidity, and Web3.js. I’m passionate about leveraging blockchain to solve real-world problems.",
      anim: blockchainAnim,
      colors: "from-purple-200 to-purple-400",
    },
    {
      title: "Problem Solving",
      desc: "Strong foundation in algorithms, data structures, and mathematical problem-solving.",
      details:
        "Actively practice competitive programming and enjoy tackling challenging problems that improve logical and analytical skills.",
      anim: problemAnim,
      colors: "from-green-200 to-green-400",
    },
    {
      title: "Open Source",
      desc: "Contributor to open-source projects and advocate for collaborative development.",
      details:
        "I believe in building together — sharing knowledge and code to push innovation and learning forward.",
      anim: opensourceAnim,
      colors: "from-pink-200 to-pink-400",
    },
  ];

  return (
    <section id="about" className="snap-section min-h-screen relative py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-400"
            }`}
          />
        </motion.div>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Text (70%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-[0.7]"
          >
            <div
              className={`glass rounded-3xl p-8 glow-hover ${
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
                in technology began with curiosity, which evolved into a love
                for building impactful digital solutions.
              </p>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With expertise in frontend, backend, and blockchain, I aim to
                create solutions that merge innovation with usability.
              </p>
            </div>
          </motion.div>

          {/* Right - Image (30%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            viewport={{ once: true }}
            className="flex-[0.3] flex justify-center"
          >
            <div
              className={`glass rounded-3xl p-6 flex justify-center glow-hover ${
                darkMode ? "" : "glass-light"
              }`}
            >
              <img
                src="/Passport_Photo.jpeg"
                alt="Profile"
                className="w-56 h-56 rounded-2xl object-cover shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              onClick={() => setActiveCard(idx)}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`cursor-pointer rounded-2xl p-6 shadow-md hover:shadow-xl bg-gradient-to-r ${skill.colors}`}
            >
              <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
              <p className="text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {activeCard !== null && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {skills[activeCard].title}
              </h3>
              <p className="mb-4">{skills[activeCard].details}</p>
              <Lottie
                animationData={skills[activeCard].anim}
                loop={true}
                className="w-40 h-40 mx-auto"
              />
              <button
                onClick={() => setActiveCard(null)}
                className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutSection;

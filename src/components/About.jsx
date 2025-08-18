import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

// Import your animations and images
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
    img: "/images/fullstack.png" // or suitable image/icon
  },
  {
    title: "Tech Enthusiast",
    desc: "Love new technologies and like to explore the field AI and Image Processing.",
    details: "Always eager to learn and experiment with cutting-edge tech, especially in AI and image processing.",
    anim: techAnim,
    img: "/images/tech.png"
  },
  {
    title: "Problem Solver",
    desc: "Equipped with good analytical and problem solving skills. Creative thinker.",
    details: "Competent in analytical reasoning and logical problem solving, with a creative mindset for tackling challenges.",
    anim: problemAnim,
    img: "/images/problem.png"
  },
  {
    title: "Visionary",
    desc: "A visionary with good leadership qualities. Aiming to reach new heights.",
    details: "Focused on future goals, driven and ready to take initiative with leadership and adaptability.",
    anim: visionaryAnim,
    img: "/images/visionary.png"
  },
];

function AboutSection({ darkMode }) {
  const [activeCard, setActiveCard] = useState(null);

  React.useEffect(() => {
    if (activeCard !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeCard]);

  return (
    <section id="about" className="min-h-screen relative py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">

        {/* Top About + Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* About Text - 70% width */}
          <div className="md:w-[70%] w-full">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-[1.2rem] text-gray-700 mb-6 leading-relaxed">
              Hi there, I’m <span className="font-semibold text-blue-700">Praveen</span> Skilled <span className="font-bold text-blue-700">Full stack web development</span> and quick learner who possesses the ability to adapt with new environments quickly. Looking for a challenging role in industry to utilize my skills and learn. Strongly Collaborative, team player who is proficient in working with interdisciplinary teams and executing goal-oriented projects. Strongly interested in obtaining a <span className="font-bold text-blue-700">Software Developer</span> position to work on enhancing the product experience. And Well-acquainted with HR methodologies.
            </p>
            <a
              href="/Resume.pdf"
              download
              className="inline-block border border-blue-700 rounded-md px-7 py-2 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition mb-4"
            >
              Resume
            </a>
          </div>
          {/* Profile Photo - 30% width, circle frame */}
          <div className="md:w-[30%] w-full flex justify-center">
            <div className="w-44 h-44 rounded-full overflow-hidden flex items-center bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg">
              <img
                src="/Passport_Photo.jpeg" // set correct path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Skill Cards / Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, y: -4 }}
              onClick={() => setActiveCard(idx)}
              className={`cursor-pointer rounded-2xl p-6 bg-white border border-gray-200 shadow-sm transition flex flex-col items-center`}
              style={{ minHeight: "220px" }}
            >
              {/* Replace with your SVG or image */}
              {/* <img src={skill.img} className="w-[70px] h-[70px] mb-4" alt={skill.title} /> */}
              <Lottie animationData={skill.anim} loop={false} className="w-20 h-20 mb-2" />
              <h4 className="text-lg font-bold mb-2 text-center">{skill.title}</h4>
              <p className="text-gray-600 text-center">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Modal (Card Details) */}
        <AnimatePresence>
          {activeCard !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.17 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black backdrop-blur-md z-40"
                onClick={() => setActiveCard(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.82, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.82, y: 60 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl px-8 py-9 flex flex-col items-center max-w-md"
                style={{ maxHeight: '90vh', overflowY: 'auto' }}
              >
                <Lottie animationData={skills[activeCard].anim} loop={true} className="w-32 h-32 mb-4" />
                <h4 className="text-2xl font-bold mb-3">{skills[activeCard].title}</h4>
                <p className="text-gray-700 text-center">{skills[activeCard].details}</p>
                <button
                  className="mt-7 px-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                  onClick={() => setActiveCard(null)}
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AboutSection;

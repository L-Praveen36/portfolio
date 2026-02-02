import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background split */}
      <div className="absolute inset-0 flex">
        {/* Left light panel */}
        <div className="w-1/2 bg-gray-100"></div>

        {/* Right dark panel */}
        <div className="w-1/2 bg-black"></div>
      </div>

      {/* Diagonal overlay */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 100% 100%, 55% 100%)",
          backgroundColor: "#000",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <p className="text-lg text-gray-600 mb-2">Hi, I am</p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Lunavath <br /> Praveen Kumar
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8">
            B.Tech Mathematics & Computing <br />
            Full-Stack & AI Enthusiast
          </p>

          {/* Social icons (optional) */}
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">
              GitHub
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">
              LinkedIn
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-md hover:bg-gray-300">
              Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <img
            src={profile}
            alt="Praveen"
            className="w-[280px] md:w-[360px] lg:w-[420px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

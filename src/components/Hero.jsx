import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 flex">
        {/* Left */}
        <div className="w-1/2 bg-gradient-to-b from-gray-100 via-white to-gray-50"></div>

        {/* Right */}
        <div className="w-1/2 bg-gradient-to-br from-[#050505] via-[#0b0b14] to-black"></div>
      </div>

      {/* Diagonal overlay */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 60% 100%)",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(10,10,20,0.95))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-gray-600 text-lg">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Lunavath <br />
            <span className="text-indigo-600">Praveen Kumar</span>
          </h1>

          <p className="text-gray-700 text-lg md:text-xl max-w-md">
            B.Tech Mathematics & Computing <br />
            Full-Stack & AI Enthusiast
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-end h-[500px] md:h-[650px]"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-[120px] rounded-full"></div>

          {/* Image */}
          <img
            src={profile}
            alt="Praveen"
            className="
              relative
              h-full
              object-contain
              translate-x-6
              drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

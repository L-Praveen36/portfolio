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
        <div className="w-1/2 bg-gradient-to-b from-gray-100 to-gray-50"></div>

        {/* Right base panel */}
        <div className="w-1/2 bg-black"></div>
      </div>

      {/* Diagonal overlay */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 100% 100%, 55% 100%)",
          background:
            "linear-gradient(135deg, #000 0%, #0b0b0b 60%, #151515 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left md:pr-20"
        >
          <p className="text-lg text-gray-600 mb-2">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
            Lunavath <br />
            <span className="text-indigo-600">Praveen Kumar</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-md">
            B.Tech Mathematics & Computing <br />
            Full-Stack & AI Enthusiast
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your@email.com"
              className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md transition"
            >
              Email
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center md:justify-end md:-mr-20 mt-10 md:mt-0"
        >
          {/* Soft glow */}
          <div className="absolute -inset-10 bg-indigo-500/10 blur-[80px] rounded-full"></div>

          <img
            src={profile}
            alt="Praveen"
            className="
              relative
              w-[260px]
              md:w-[340px]
              lg:w-[420px]
              object-contain
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

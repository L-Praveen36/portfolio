import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.webp"; // replace with new image

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <p className="text-slate-300 text-lg">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Lunavath <br />
            <span className="text-indigo-400">Praveen Kumar</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-md">
            B.Tech Mathematics & Computing <br />
            Full-Stack & AI Enthusiast
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-indigo-500 text-white font-medium shadow-lg hover:bg-indigo-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-indigo-400 text-indigo-300 font-medium hover:bg-indigo-500/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9 }}
  className="relative hidden md:block"
>
  {/* Glow */}
  <div className="absolute -right-32 top-1/2 -translate-y-1/2 
                  w-[620px] h-[620px] 
                  bg-indigo-500/35 
                  blur-[180px] rounded-full" />

  {/* Image */}
  <img
    src={profile}
    alt="Praveen Kumar"
    className="
      absolute
      -right-24
      top-1/2
      -translate-y-1/2
      w-[460px]
      lg:w-[520px]
      xl:w-[560px]
      object-contain
      grayscale
      contrast-110
      drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]
      [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]
    "
  />
</motion.div>

      </div>
    </section>
  );
};

export default Hero;

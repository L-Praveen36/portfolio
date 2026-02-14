import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <p className="text-white/70 text-lg">Hi, I am</p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Lunavath <br />
            <span className="gradient-text">
              Praveen Kumar
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-md">
            B.Tech Mathematics & Computing <br />
            Full-Stack & AI Enthusiast
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="glow-btn"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-[#00F5D4]/50 text-[#00F5D4] font-medium hover:bg-[#00F5D4]/10 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9 }}
  className="relative flex justify-center items-center"
>
  {/* Glow (Only Desktop) */}
  <div className="hidden md:block absolute -right-32 top-1/2 -translate-y-1/2 
                  w-[620px] h-[620px] 
                  bg-[#00F5D4]/25 
                  blur-[160px] rounded-full" />

  <div className="hidden md:block absolute -right-20 top-1/2 -translate-y-1/2 
                  w-[500px] h-[500px] 
                  bg-cyan-400/10 
                  blur-[140px] rounded-full" />

  {/* Image */}
  <img
  src={profile}
  alt="profile picture"
  loading="eager"
  fetchpriority="high"
  className="
    relative
    w-44
    sm:w-52
    md:absolute
    md:-right-24
    md:top-1/2
    md:-translate-y-1/2
    md:w-[420px]
    lg:w-[480px]
    xl:w-[520px]
    object-contain
    md:contrast-110
    md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
    md:[mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]
  "
/>

</motion.div>


      </div>
    </section>
  );
};

export default Hero;

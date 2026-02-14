import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Decentralized Crowdfunding Platform",
      description:
        "A blockchain-based crowdfunding platform built with Solidity, React, and Web3.js that allows users to create and fund projects transparently.",
      tags: ["blockchain", "web"],
      banner: "/crowdfunding.png",
      github: "https://github.com/L-Praveen36/Decentralized-Crowdfunding",
      live: null,
      tech: ["Solidity", "React", "Web3.js", "Ethereum", "Truffle"],
    },
    {
      title: "Lost and Found Management System",
      description:
        "A full-stack web application for managing lost and found items with authentication, image uploads, and real-time notifications.",
      tags: ["web"],
      banner: "/lostfound.png",
      github: "https://github.com/L-Praveen36/lostfound",
      live: "https://lostfoundapi.netlify.app/",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-[#00F5D4]/60 rounded-full"></div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-14">
          <div className="glass rounded-full p-1 flex gap-2">
            {["all", "web", "blockchain"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#00F5D4] text-[#0F2027]"
                    : "text-white/70 hover:text-[#00F5D4]"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {filteredProjects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass max-w-md mx-auto rounded-2xl overflow-hidden 
                 flex flex-col transition-all duration-300
                 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]"
    >
      {/* Banner (smaller) */}
      <div
        className="w-full h-40 bg-center bg-cover bg-no-repeat border-b border-white/10"
        style={{ backgroundImage: `url('${project.banner}')` }}
      />

      {/* Content (reduced padding) */}
      <div className="flex flex-col flex-1 px-6 py-6 gap-4">

        <div>
          <h3 className="text-xl font-semibold mb-2 text-center text-white">
            {project.title}
          </h3>
          <p className="text-white/70 text-center text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.tech.map((stack, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-full bg-purple-500/10 
                         text-purple-400 text-xs font-medium"
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-full bg-white/5 
                         text-white/60 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-3 justify-center">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-1.5 rounded-full 
                       bg-white/5 text-white/70 
                       hover:text-purple-400 transition text-sm"
          >
            GitHub
          </motion.a>

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 rounded-full 
                         bg-gradient-to-r from-purple-500 to-cyan-400
                         text-white text-sm"
            >
              Live Demo
            </motion.a>
          )}
        </div>

      </div>
    </motion.div>
  ))}
</div>


      </div>
    </section>
  );
}

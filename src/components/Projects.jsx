import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects({ darkMode }) {
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
      tech: ["Solidity", "React", "Web3.js", "Ethereum", "Truuffle"],
    },
    {
      title: "Lost and Found Management System",
      description:
        "A full-stack web application for managing lost and found items with user authentication, image uploads, and real-time notifications.",
      tags: ["web"],
      banner: "/lostfound.png",
      github: "https://github.com/L-Praveen36/lostfound",
      live: "https://lostfoundapi.netlify.app/",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Cloudinary", "Netlify", "Render"],
    },
    // {
    //   title: "AI-Powered Math Solver",
    //   description:
    //     "An application that uses machine learning to solve complex mathematical problems and provide step-by-step explanations.",
    //   tags: ["web"],
    //   banner: "/math.png",
    //   github: "#",
    //   live: null,
    //   tech: ["Python", "Flask", "scikit-learn", "React"],
    // },
    // {
    //   title: "NFT Marketplace",
    //   description:
    //     "A decentralized marketplace for buying and selling NFTs with integrated wallet connectivity and bidding system.",
    //   tags: ["blockchain"],
    //   banner: "/projects/nftmarket.svg",
    //   github: "#",
    //   live: null,
    //   tech: ["Solidity", "React", "Web3.js", "IPFS", "MetaMask"],
    // },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTab));

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">My Projects</h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-400"
            }`}
          ></div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className={`glass rounded-full p-1 ${darkMode ? "" : "glass-light"}`}>
            {["all", "web", "blockchain"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2 rounded-full font-medium capitalize ${
                  activeTab === tab
                    ? `${darkMode ? "bg-indigo-600" : "bg-indigo-500"} text-white`
                    : `${darkMode ? "text-gray-300" : "text-gray-600"}`
                } transition-all`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid: only 2 per row, clean spacious content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.13 }}
              viewport={{ once: true }}
              className={`glass rounded-3xl shadow-lg hover:shadow-2xl glow-hover flex flex-col transition-all h-full overflow-hidden ${
                darkMode ? "" : "glass-light"
              }`}
            >
              {/* Project Banner */}
              <div
                className="w-full h-44 md:h-52 rounded-t-3xl bg-center bg-cover bg-no-repeat border-b"
                style={{
                  backgroundImage: `url('${project.banner}')`,
                  borderBottom: darkMode
                    ? "1px solid #23253a"
                    : "1px solid #ecebfc",
                }}
              />

              {/* Project Info */}
              <div className="flex flex-col flex-1 px-8 py-8 gap-5">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{project.title}</h3>
                  <p className={`mb-3 text-center text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {project.description}
                  </p>
                </div>
                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-2 mb-1">
                  {project.tech.map((stack, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 text-xs font-semibold whitespace-nowrap"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        darkMode
                          ? "bg-gray-800 text-indigo-300"
                          : "bg-gray-100 text-indigo-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Actions */}
                <div className="flex gap-4 mt-3 justify-center">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>GitHub</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.96 }}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                        darkMode
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : "bg-indigo-500 hover:bg-indigo-600"
                      } text-white`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      <span>Live Demo</span>
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

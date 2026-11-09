import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CloudPilot",
    subtitle: "AI-Powered Cloud Deployment & Observability Platform",
    description:
      "A platform that analyzes source repositories, assesses deployment readiness, and streamlines Docker-based deployments with monitoring and AI-assisted troubleshooting.",
    tags: ["platform", "fullstack"],
    banner: "/fullstack.webp",
    github: "https://github.com/L-Praveen36/CloudPilot",
    live: null,
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Repository analysis and deployment-readiness assessment",
      "Docker deployment, dynamic ports, and container lifecycle management",
      "Container metrics, health checks, logs, and AI-assisted diagnosis",
    ],
  },
  {
    title: "Lost and Found Management System",
    subtitle: "Full-Stack Web Application · IITISoC Project",
    description:
      "A web application that helps users report, manage, search, and retrieve lost-and-found item records through a responsive interface and REST APIs.",
    tags: ["fullstack"],
    banner: "/lostfound.webp",
    github: "https://github.com/L-Praveen36/lostfound",
    live: "https://lostfoundapi.netlify.app/",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Cloudinary"],
    highlights: [
      "Item submission, browsing, search, and filtering workflows",
      "Firebase authentication and REST API integration",
      "Cloudinary image uploads and email notifications",
    ],
  },
  {
    title: "Indian-Context-Aware Multilingual Web Retrieval",
    subtitle: "Multilingual Document Processing & Web Retrieval",
    description:
      "A Python document-processing pipeline for extracting and preparing English and Indian-language content from web pages, PDFs, scanned documents, and images.",
    tags: ["research"],
    banner: "/problem.webp",
    github: "https://github.com/L-Praveen36/Indian-Context-Retrieval-Summarization",
    live: null,
    tech: ["Python", "PyMuPDF", "BeautifulSoup", "OpenCV", "Tesseract OCR"],
    highlights: [
      "Adaptive routing for direct text extraction and OCR",
      "OCR preprocessing, denoising, and image enhancement",
      "English/Devanagari normalization and language detection",
    ],
  },
  {
    title: "Decentralized Crowdfunding Platform",
    subtitle: "Blockchain-Based Web Application",
    description:
      "A decentralized crowdfunding application with smart-contract functionality for campaign creation, contributions, and transparent transaction tracking.",
    tags: ["blockchain"],
    banner: "/crowdfunding.webp",
    github: "https://github.com/prudhvi-machana/Decentralized-Crowdfunding",
    live: null,
    tech: ["Solidity", "Web3.js", "Ethereum", "MetaMask", "Truffle", "Ganache"],
    highlights: [
      "Smart contracts for campaigns and contributions",
      "MetaMask wallet connection and transaction approvals",
      "Local blockchain development and testing",
    ],
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Research", value: "research" },
  { label: "Blockchain", value: "blockchain" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const filteredProjects = useMemo(
    () =>
      activeTab === "all"
        ? projects
        : projects.filter((project) => project.tags.includes(activeTab)),
    [activeTab]
  );

  return (
    <section id="projects" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#00F5D4]/70 mb-3">
            Selected work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 leading-relaxed">
            A selection of software, research, and blockchain projects from my
            recent work.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="glass rounded-full p-1.5 flex flex-wrap justify-center gap-1">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveTab(filter.value)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === filter.value
                    ? "bg-[#00F5D4] text-[#0F2027]"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-[#00F5D4]/30 transition-colors flex flex-col"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-800">
                <img
                  src={project.banner}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/20 to-transparent" />
                <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-[#00F5D4]">
                  {project.subtitle}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-[#00F5D4] shrink-0 mt-1" size={21} />
                </div>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/65">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-white/65">
                      <span className="text-[#00F5D4] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 rounded-full bg-[#00F5D4]/8 border border-[#00F5D4]/15 text-[#8df8e7] text-xs"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/10 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 text-white/80 hover:bg-white/15 hover:text-white transition text-sm"
                  >
                    <Github size={16} /> Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F5D4] text-[#0b1220] hover:brightness-110 transition text-sm font-semibold"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

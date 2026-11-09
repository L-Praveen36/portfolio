import { motion } from "framer-motion";
import {
  Code2,
  PanelsTopLeft,
  Server,
  Cloud,
  Wrench,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: PanelsTopLeft,
    skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "API Integration"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Containerization", "Deployment Workflows", "Health Checks", "GitHub Webhooks", "CI/CD Concepts"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Cloudinary", "Netlify", "Render", "MetaMask", "Truffle", "Ganache"],
  },
  {
    title: "Core Computer Science",
    icon: Cpu,
    skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#00F5D4]/70 mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 leading-relaxed">
            Technologies, tools, and computer science fundamentals I use to build
            reliable full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-[#00F5D4]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00F5D4]/10 text-[#00F5D4] flex items-center justify-center">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

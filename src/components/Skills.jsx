import { motion } from "framer-motion";

// Skill groups
const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: "/c++.png" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML 5", icon: "/html.png" },
      { name: "CSS 3", icon: "/css.svg" },
      { name: "JavaScript", icon: "/JavaScript.png" },
      { name: "React Js", icon: "/react.png" },
      { name: "Node Js", icon: "/node.js.png" },
      { name: "Express Js", icon: "/express.png" },
      { name: "Mongo Db", icon: "/mongodb.png" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "/git.png" },
      { name: "GitHub", icon: "/github.png" },
      { name: "Netlify", icon: "/Netlify.png" },
      { name: "Render", icon: "/Render.jpg" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Skills <span className="gradient-text">& Experience</span>
        </motion.h2>

        {skillGroups.map((group, sectionIdx) => (
          <div key={group.title} className="mb-14">

            {/* Group Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.12 }}
              className="text-2xl font-semibold mb-8 text-[#00F5D4]"
            >
              {group.title}
            </motion.h3>

            <div className="flex flex-wrap gap-x-14 gap-y-10">
              {group.skills.map(({ name, icon }, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: idx * 0.07 }}
                  whileHover={{ scale: 1.12, y: -6 }}
                  className="flex flex-col items-center transition-all"
                >
                  {/* Glass Circle */}
                  <div className="w-24 h-24 rounded-full flex items-center justify-center glass hover:shadow-[0_0_25px_rgba(0,245,212,0.3)] transition-all duration-300">
                    <img
                      src={icon}
                      alt={name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  <span className="mt-3 text-base text-white/80 font-medium">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

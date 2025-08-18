import { motion } from "framer-motion";

// Skill groups and items
const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: "/c++.png" },
      { name: "Python", icon: "/python.jpeg" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML 5", icon: "/html.png" },
      { name: "CSS 3", icon: "/css.svg" },

      { name: "Javascript", icon: "/JavaScript.png" },
    
      { name: "React Js", icon: "/react.jpeg" },
      { name: "Node Js", icon: "/node.js.png" },
      { name: "Express Js", icon: "/ExpressJS.webp" },
      { name: "Mongo Db", icon: "/mongodb.png" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "/git.jpeg" },
      { name: "GitHub", icon: "/github.png" },
      { name: "Netlify", icon: "/Netlify.png" },
      { name: "Render", icon: "/Render.jpg" },
    ],
  },
];

export default function SkillsSection({ darkMode }) {
  return (
    <section id="skills" className={`py-20 md:py-28 ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Skills <span className="text-indigo-600">&amp; Experience</span>
        </motion.h2>

        {skillGroups.map((group, sectionIdx) => (
          <div key={group.title} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.12 }}
              className="text-2xl font-semibold mb-7 text-left"
              style={{ color: darkMode ? "#a5b4fc" : "#3730a3" }}
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
                  whileHover={{
                    scale: 1.10,
                    y: -6,
                    boxShadow: "0 8px 28px 0 rgba(60,99,246,0.14)", // glow on hover
                  }}
                  className="flex flex-col items-center px-2 transition-all"
                >
                  <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-md bg-gray-100 dark:bg-gray-900">
                    <img src={icon} alt={name} className="w-14 h-14 object-contain" />
                  </div>
                  <span className="mt-2 text-base text-gray-700 dark:text-gray-300 font-medium">
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

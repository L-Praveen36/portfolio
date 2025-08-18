import { motion } from "framer-motion";

const skills = {
  Languages: ["C++", "Python"],
  Fundamentals: ["Data Structures & Algorithms", "OOP"],
  "Web Development": ["React.js", "HTML", "CSS", "JavaScript", "UI/UX"],
  "Database & Auth": ["MongoDB", "Firebase Auth"],
  Tools: ["VS Code", "GitHub", "Netlify", "Render"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          ⚡ Skills & Tools
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, list], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 shadow-lg transition"
            >
              {/* Category */}
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                {category}
              </h3>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {list.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Achievements({ darkMode }) {
  const achievements = [
    {
      title: "JEE Advanced Rank",
      value: 1500,
      suffix: "",
      description: "All India Rank in JEE Advanced 2021",
      icon: "🏆",
    },
    {
      title: "JEE Mains Percentile",
      value: 99.5,
      suffix: "%",
      description: "Percentile in JEE Mains 2021",
      icon: "📊",
    },
    {
      title: "Open Source Contributions",
      value: 12,
      suffix: "+",
      description: "Contributions to various open source projects",
      icon: "👨‍💻",
    },
    {
      title: "Hackathons Participated",
      value: 5,
      suffix: "+",
      description: "National level hackathons",
      icon: "🏅",
    },
  ];

  return (
    <section id="achievements" className="snap-section min-h-screen relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Achievements</h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-400"
            }`}
          ></div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`glass rounded-2xl p-6 hover-tilt glow-hover ${
                darkMode ? "" : "glass-light"
              } text-center`}
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-5xl mb-4"
              >
                {achievement.icon}
              </motion.div>

              {/* Value */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2 gradient-text"
              >
                {achievement.value}
                <span className="text-indigo-400">{achievement.suffix}</span>
              </motion.h3>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="text-xl font-medium mb-2"
              >
                {achievement.title}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {achievement.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

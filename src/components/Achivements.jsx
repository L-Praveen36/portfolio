import { motion } from "framer-motion";

export default function Achievements({ darkMode }) {
  const achievements = [
    {
      title: "JEE Advanced Rank",
      value: 350,
      suffix: "",
      description: "All India Rank (ST Category) in JEE Advanced 2023",
      icon: "🏆",
    },
    {
      title: "JEE Mains Percentile",
      value: 95.5,
      suffix: "%",
      description: "Percentile in JEE Mains 2021",
      icon: "📊",
    },
    {
      title: "Open Source Contributions",
      value: 5,
      suffix: "+",
      description: "Contributions to various open source projects",
      icon: "👨‍💻",
    },
    // {
    //   title: "Hackathons Participated",
    //   value: 3,
    //   suffix: "+",
    //   description: "National level hackathons",
    //   icon: "🏅",
    // },
  ];

  return (
    <section id="achievements" className="snap-section relative py-10">
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
        {/* Achievements Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {achievements.map((achievement, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass max-w-xs mx-auto 
                 rounded-xl p-5 
                 text-center transition-all duration-300
                 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]"
    >
      {/* Icon */}
      <div className="text-4xl mb-3">
        {achievement.icon}
      </div>

      {/* Value */}
      <h3 className="text-3xl font-bold mb-1 
                     bg-gradient-to-r from-purple-400 to-cyan-400 
                     bg-clip-text text-transparent">
        {achievement.value}
        <span className="text-purple-400">
          {achievement.suffix}
        </span>
      </h3>

      {/* Title */}
      <p className="text-lg font-medium text-white mb-1">
        {achievement.title}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}

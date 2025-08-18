import { motion } from "framer-motion";

export default function Education({ darkMode }) {
  const education = [
    {
      year: "2021 - Present",
      degree: "B.Tech Mathematics & Computing",
      institution: "Indian Institute of Technology, Indore",
      description:
        "Currently pursuing my undergraduate degree with a focus on algorithms, data structures, and computational mathematics.",
    },
    {
      year: "2019 - 2021",
      degree: "Higher Secondary Education",
      institution: "Narayana Junior College, Hyderabad",
      description:
        "Completed 11th and 12th grade with Mathematics, Physics, and Chemistry as main subjects.",
    },
    {
      year: "2018 - 2019",
      degree: "Secondary Education",
      institution: "Kendriya Vidyalaya, Bolarum",
      description: "Completed 10th grade with distinction in all subjects.",
    },
  ];

  return (
    <section id="education" className="min-h-screen relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
          <div
            className={`w-24 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-400"
            }`}
          ></div>
        </motion.div>

        {/* Grid of Education Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl p-7 shadow-md hover:shadow-xl glow-hover transition-all flex flex-col ${
                darkMode ? "" : "glass-light"
              }`}
            >
              <p
                className={`text-sm font-medium mb-2 ${
                  darkMode ? "text-indigo-400" : "text-indigo-500"
                }`}
              >
                {item.year}
              </p>
              <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
              <p
                className={`font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.institution}
              </p>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

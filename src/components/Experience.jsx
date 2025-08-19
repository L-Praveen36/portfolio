import { motion } from "framer-motion";

export default function Education({ darkMode }) {
  const education = [
    {
      year: "2023 - Present",
      degree: "B.Tech Mathematics & Computing",
      institution: "Indian Institute of Technology, Indore",
      description:
        "Currently pursuing my undergraduate degree with a focus on algorithms, data structures, and computational mathematics.",
      logo: "/IITI.png" // use your real path/logo
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Education",
      institution: "Vertex Junior College, Hyderabad",
      description:
        "Completed 11th and 12th grade with Mathematics, Physics, and Chemistry as main subjects.",
      logo: "/vertex.png"
    },
    {
      year: "2016 - 2021",
      degree: "Secondary Education",
      institution: "Jawahar Navodaya Vidyalaya, Medak",
      description: "Completed 10th grade with 84.8% percentage.",
      logo: "/jnv.png"
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

        {/* Grid of Tall Stylish Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.13 }}
              viewport={{ once: true }}
              className={`glass rounded-3xl py-10 px-7 shadow-lg hover:shadow-2xl glow-hover flex flex-col items-center gap-3 h-[410px] sm:h-[420px] md:h-[430px] transition-all ${
                darkMode ? "" : "glass-light"
              }`}
            >
              {/* Logo */}
              <div className="w-20 h-20 mb-2 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center shadow">
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                />
              </div>
              {/* Year */}
              <p
                className={`text-sm font-medium mb-1 ${
                  darkMode ? "text-indigo-400" : "text-indigo-500"
                }`}
              >
                {item.year}
              </p>
              {/* Degree */}
              <h3 className="text-xl font-bold mb-2 text-center">{item.degree}</h3>
              {/* Institution */}
              <p
                className={`font-medium mb-2 text-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.institution}
              </p>
              {/* Description */}
              <p className={`text-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

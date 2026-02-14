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
        {/* Education Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {education.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="glass max-w-sm mx-auto 
                 rounded-2xl py-8 px-6 
                 flex flex-col items-center 
                 gap-3 transition-all duration-300
                 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
    >
      {/* Logo */}
      <div className="w-16 h-16 mb-2 rounded-lg 
                      bg-white/5 backdrop-blur-md 
                      flex items-center justify-center">
        <img
          src={item.logo}
          alt={`${item.institution} logo`}
          className="w-12 h-12 object-contain"
          loading="lazy"
        />
      </div>

      {/* Year */}
      <p className="text-sm font-medium text-purple-400">
        {item.year}
      </p>

      {/* Degree */}
      <h3 className="text-lg font-semibold text-center text-white">
        {item.degree}
      </h3>

      {/* Institution */}
      <p className="text-sm text-gray-400 text-center">
        {item.institution}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 text-center leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}

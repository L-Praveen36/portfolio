import { motion } from "framer-motion";

export default function Contact({ darkMode }) {
  const contactDetails = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "lunavathpraveen36@gmail.com",
      link: "mailto:lunavathpraveen36@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+91 9440388878",
      link: "tel:+919440388878",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Location",
      value: "Indore, Madhya Pradesh, India",
      link: "https://maps.google.com/?q=Indore",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/L-Praveen36",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/praveen-kumar-lunavath-a28a75371/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
  ];

  return (
    <section
  id="contact"
  className="snap-section min-h-screen relative py-20 flex items-center justify-center bg-[#0f172a]"
>
  <div className="max-w-7xl mx-auto px-6 w-full md:w-3/5">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
    </motion.div>

    {/* Contact Info */}
    <div className="space-y-6">
      {contactDetails.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-2xl 
                     bg-white/5 backdrop-blur-md 
                     border border-white/10
                     hover:border-purple-500/40
                     transition-all duration-300"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 30px rgba(139,92,246,0.4)"
          }}
        >
          <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 text-purple-400">
            {item.icon}
          </div>

          <div>
            <h4 className="font-semibold text-white">{item.title}</h4>
            <p className="text-gray-400">{item.value}</p>
          </div>
        </motion.a>
      ))}
    </div>

    {/* Social Links */}
<div className="mt-14">
  <h4 className="font-semibold mb-8 text-center text-gray-300">
    Connect with me
  </h4>

  <div className="flex justify-center gap-12 flex-wrap">
    {socialLinks.map((social, index) => (
      <motion.a
        key={index}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 
                   p-6 rounded-2xl 
                   bg-white/5 backdrop-blur-md 
                   border border-white/10
                   text-gray-300
                   hover:text-white
                   transition-all duration-300"
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 30px rgba(139,92,246,0.5)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Bigger Icon */}
        <div className="text-4xl">
          {social.icon}
        </div>

        {/* Name Below */}
        <span className="text-sm font-medium tracking-wide">
          {social.name}
        </span>
      </motion.a>
    ))}
  </div>
</div>


    {/* Footer */}
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-20 py-6 text-center text-gray-500"
    >
      <p>
        © {new Date().getFullYear()} Lunavath Praveen Kumar. All rights reserved.
      </p>
    </motion.footer>

  </div>
</section>

  );
}

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    title: "Institutional Email",
    value: "mc230041018@iiti.ac.in",
    href: "mailto:mc230041018@iiti.ac.in",
    Icon: Mail,
  },
  {
    title: "Personal Email",
    value: "lunavathpraveen36@gmail.com",
    href: "mailto:lunavathpraveen36@gmail.com",
    Icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 94403 88878",
    href: "tel:+919440388878",
    Icon: Phone,
  },
  {
    title: "Location",
    value: "Indore, Madhya Pradesh, India",
    href: "https://maps.google.com/?q=Indore",
    Icon: MapPin,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    value: "L-Praveen36",
    href: "https://github.com/L-Praveen36",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/praveen-kumar-lunavath-a28a75371/",
    Icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-section min-h-screen relative py-20 flex items-center justify-center bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-[#00F5D4]/70 mb-3">
            Have an opportunity or idea?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/60 leading-relaxed">
            I’m open to conversations about software development, engineering
            opportunities, and interesting projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {contactDetails.map(({ title, value, href, Icon }, index) => (
            <motion.a
              key={title}
              href={href}
              target={title === "Location" ? "_blank" : undefined}
              rel={title === "Location" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-[#00F5D4]/30 transition-colors"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-[#00F5D4]/10 text-[#00F5D4] flex items-center justify-center">
                <Icon size={21} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-white/45">{title}</span>
                <span className="block mt-1 text-white/85 font-medium break-all">
                  {value}
                </span>
              </span>
              <ArrowUpRight size={17} className="ml-auto shrink-0 text-white/35" />
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ name, value, href, Icon }, index) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass min-w-52 flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 hover:border-[#00F5D4]/30 transition-colors"
            >
              <span className="text-[#00F5D4]"><Icon size={22} /></span>
              <span>
                <span className="block text-white font-medium">{name}</span>
                <span className="block text-sm text-white/45">{value}</span>
              </span>
              <ArrowUpRight size={16} className="ml-auto text-white/35" />
            </motion.a>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 pt-7 border-t border-white/10 text-center text-sm text-white/40"
        >
          © {new Date().getFullYear()} Lunavath Praveen Kumar. All rights reserved.
        </motion.footer>
      </div>
    </section>
  );
}

// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Hero({ darkMode }) {
  // Floating 3D Blob Component
  const FloatingBlob = () => {
    const meshRef = React.useRef();

    useFrame(({ clock }) => {
      if (meshRef.current) {
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      }
    });

    return (
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>
    );
  };

  return (
    <section
      id="home"
      className="snap-section min-h-screen relative overflow-hidden"
    >
      {/* Background floating blur blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-purple-500 mix-blend-overlay filter blur-3xl floating"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-500 mix-blend-overlay filter blur-3xl floating-delay-1"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl floating-delay-2"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center px-6 py-32 md:py-18">
        <div className="relative z-10 w-full">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Lunavath Praveen Kumar</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              B.Tech Mathematics & Computing @ IIT Indore | Full-Stack &
                                AI Enthusiast
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-medium ${
                  darkMode
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-500 hover:bg-indigo-600"
                } text-white glow-hover`}
              >
                 My Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-medium ${
                  darkMode
                    ? "glass hover:bg-gray-800"
                    : "glass-light hover:bg-gray-100"
                } glow-hover`}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hidden md:block absolute -right-40 -bottom-40 w-96 h-96"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <FloatingBlob />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

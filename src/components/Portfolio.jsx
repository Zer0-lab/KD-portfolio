import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <header className="fixed w-full flex justify-between p-4 bg-opacity-80 backdrop-blur-md">
        <h1 className="text-xl font-bold">My Portfolio - {currentMonth}</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-fixed bg-center relative"
          style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}
        >
          <motion.img
            src="https://source.unsplash.com/random/200x200"
            alt="Futuristic Avatar"
            className="absolute bottom-10 w-48 md:w-64 rounded-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1 
            className="text-5xl font-bold relative z-10" 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            Full-Stack Web Developer
          </motion.h1>
          <motion.p 
            className="text-lg mt-2 relative z-10" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
          >
            Crafting Interactive Experiences
          </motion.p>
        </section>

        {/* About Section */}
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Passionate about web development with expertise in HTML, CSS, JavaScript, React, and Node.js.
          </p>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="p-4 bg-gray-800 text-white rounded-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="mt-2">Description of the project.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full">HTML</span>
            <span className="px-4 py-2 bg-green-600 text-white rounded-full">CSS</span>
            <span className="px-4 py-2 bg-yellow-600 text-white rounded-full">JavaScript</span>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4">Reach me via:</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-2xl text-gray-700 hover:text-blue-600"><FaGithub /></a>
            <a href="#" className="text-2xl text-gray-700 hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </section>
      </main>

      <footer className="p-4 text-center">
        <p>&copy; 2025 My Portfolio. All rights reserved. - {currentMonth}</p>
      </footer>
    </div>
  );
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { Github, Linkedin, Twitter, ChevronDown, Mail } from "lucide-react"
import piyushimage from "../assets/WhatsApp Image 2024-01-15 at 12.07.36_8b071841.jpg" 

export default function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.05] bg-[size:50px_50px] animate-grid-flow" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50">
              <Image
                src={piyushimage}
                alt="Piyush Kumar Sinha"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Animated ring */}
            <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-spin-slow" />
          </motion.div>

          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            >
              Piyush Kumar Sinha
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-6 text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Tech Explorer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Open Source Contributor",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 mb-8 text-lg leading-relaxed"
            >
              "Full-stack developer specializing in building scalable and high-performance web applications using React, Node.js, and modern technologies."
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start mb-8"
            >
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-blue-600/50 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600/10 transition duration-300 shadow-lg hover:shadow-blue-600/50"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              <a
                href="https://github.com/Piyushh-h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-sinha-93a20b263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/piyushh_h"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}


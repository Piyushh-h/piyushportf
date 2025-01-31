"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import uberclone from "../assets/uber clone.webp"
import horizon from "../assets/saas-financial-model.webp"
import pixelflow from "../assets/xpixelf.jpeg"
const projects = [
  {
    title: "Uber Clone",
    description:
      "A fully functional Uber Clone using the MERN stack, handling user and captain authentication, profile management, and ride-booking features.",
    image: uberclone,
    technologies: ["MongoDB", "Express", "React", "Node.js", "Google Maps API"],
    link: "https://github.com/Piyushh-h/UberClone", 
  },
  {
    title: "Horizon",
    description:
      "A financial SaaS platform built with Next.js, React, and Tailwind CSS, integrating Plaid for bank account management and Dwolla for secure fund transfers.",
    image: horizon,
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "Plaid", "Dwolla"],
    link: "https://github.com/Piyushh-h/Horizon", 
  },
  {
    title: "PixelFlow",
    description:
      "A SaaS-based media-sharing platform with AI-driven features for context-aware image resizing, intelligent video previews, and efficient compression.",
    image: pixelflow,
    technologies: ["Next.js", "React", "Clerk", "Zustand", "Cloudinary AI"],
    link: "#" , 
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-br from-black to-gray-900"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900/50 backdrop-blur-sm text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


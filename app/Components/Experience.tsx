"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Ethnus",
    date: "Aug 2023 - Nov 2023",
    description: [
      "Upgraded and integrated 10+ new features using MERN stack technology across 2 frontend applications, improving user experience and application usage.",
      "Resolved 50+ backend bugs using RESTful API, boosting system reliability by 25%.",
      "Collaborated with cross-functional teams to ensure comprehensive feature testing and functionality.",
    ],
  },
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 mb-8"
            >
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 ml-4 hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <h4 className="text-lg text-blue-400 mb-2">{exp.company}</h4>
                <p className="text-gray-400 mb-4">{exp.date}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 pl-4 border-l-2 border-blue-500">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


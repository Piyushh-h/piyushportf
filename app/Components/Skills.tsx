"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "Java", level: 90 },
  { name: "C++", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "MySQL", level: 75 },
  { name: "Next.js", level: 70 },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
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
          Technical Skills
        </motion.h2>
        {/* Added max-w-4xl and mx-auto here to center and limit width */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full" // Added to ensure consistent width
            >
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-100">{skill.name}</span>
                <span className="text-sm font-medium text-blue-100">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
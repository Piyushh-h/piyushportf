"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certifications = [
  "AWS Cloud Practitioner",
  "NPTEL Cloud Computing (IIT Kharagpur)",
  "Walmart USA Advanced Software Engineering Simulation",
]

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
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
          Certifications
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <Award className="w-8 h-8 text-blue-500 mr-4" />
                <p className="text-lg font-semibold text-white">{cert}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


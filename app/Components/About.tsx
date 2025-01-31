"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Book, Briefcase, Award } from "lucide-react"

const achievements = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "70+ Projects Completed",
    description: "Delivered high-quality web applications using cutting-edge technologies.",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Continuous Learner",
    description: "Constantly updating skills with the latest industry trends and best practices.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Problem Solver",
    description: "Skilled at tackling complex challenges and finding innovative solutions.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Multiple Certifications",
    description: "Recognized expertise in cloud computing and software engineering.",
  },
]

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-8 text-gray-300 leading-relaxed"
          >
            As a passionate Full Stack Developer pursuing my Bachelor's in Computer Science and Engineering at Vellore
            Institute of Technology, I bring a unique blend of theoretical knowledge and practical expertise to every
            project. With a strong foundation in the MERN stack and a keen eye for innovative solutions, I specialize in
            crafting robust, scalable web applications that not only meet but exceed client expectations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg mb-12 text-gray-300 leading-relaxed"
          >
            My approach to development is rooted in continuous learning and adaptation to emerging technologies. I
            thrive in collaborative environments, leveraging my problem-solving skills and attention to detail to
            deliver high-quality code. Whether it's optimizing backend processes or creating intuitive user interfaces,
            I'm committed to pushing the boundaries of what's possible in web development.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-blue-500 mb-4"
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


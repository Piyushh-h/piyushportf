"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-black to-gray-900"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in tech.
          Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
        </motion.p>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-500" />
                <a
                  href="tel:+919142555840"
                  className="text-lg text-gray-300 hover:text-blue-500 transition duration-300"
                >
                  +91 9142555840
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-500" />
                <a
                  href="mailto:piyushsinha0810@gmail.com"
                  className="text-lg text-gray-300 hover:text-blue-500 transition duration-300"
                >
                  piyushsinha0810@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex-1 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}


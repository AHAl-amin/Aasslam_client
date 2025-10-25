"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import hardward from "../../../public/img/home/technology/hardware.png"
import cloud from "../../../public/img/home/technology/cloud.png"
import software from "../../../public/img/home/technology/software.png"
import cybersecurity from "../../../public/img/home/technology/cybersecurity.png"
import datacenter from "../../../public/img/home/technology/datacenter.png"
import collaboration from "../../../public/img/home/technology/collaboration.png"

const OurCoreService = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const technologies = [
    {
      id: 1,
      title: "Hardware Solutions",
      description:
        "Empower your workforce with cutting-edge laptops, desktops, servers, and storage systems designed for performance and reliability.",
      bgImage: hardward,
    },
    {
      id: 2,
      title: "Cloud Services",
      description:
        "Leverage leading platforms like Microsoft Azure, AWS, and Google Cloud to enable flexibility, scalability, and innovation across your organization.",
      bgImage: cloud,
    },
    {
      id: 3,
      title: "Software Licensing",
      description:
        "Simplify procurement and management of enterprise software from top vendors such as Microsoft, Adobe, and VMware.",
      bgImage: software,
    },
    {
      id: 4,
      title: "Cybersecurity Solutions",
      description:
        "Protect your digital assets with advanced tools for network defense, endpoint protection, and identity management.",
      bgImage: cybersecurity,
    },
    {
      id: 5,
      title: "Data Center & Infrastructure",
      description:
        "Modernize your IT backbone with efficient virtualization, networking, and backup solutions that enhance operational resilience.",
      bgImage: datacenter,
    },
    {
      id: 6,
      title: "Collaboration & Productivity Tools",
      description:
        "Enable seamless teamwork with solutions like Microsoft 365, Zoom, and Cisco Webex—built to keep your teams connected anywhere.",
      bgImage: collaboration,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="w-full bg-[#F8F8F8] py-16 px-4 md:px-8 lg:px-16">
      <div className="container max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="texts text-lg max-w-xl mx-auto">
           Comprehensive IT solutions designed to accelerate your business goals and ensure long-term success.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(tech.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <img
                src={tech.bgImage || "/placeholder.svg"}
                alt={tech.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: hoveredCard === tech.id ? 0.3 : 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black"
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: hoveredCard === tech.id ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full flex flex-col justify-end p-6 text-white"
              >
                <h3 className="text-2xl font-bold mb-2">{tech.title}</h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredCard === tech.id ? 1 : 0,
                    height: hoveredCard === tech.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-gray-200 overflow-hidden"
                >
                  {tech.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default OurCoreService

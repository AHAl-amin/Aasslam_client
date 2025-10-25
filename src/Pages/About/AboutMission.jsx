

import { useState } from "react"
import { motion } from "framer-motion"
import mission from '../../../public/img/home/mission.png'
import logo from '../../../public/img/home/logo.png'

export default function AboutMission() {
  const [activeTab, setActiveTab] = useState("mission")

  const tabContent = {
    mission: {
      title: "Our company mission",
      paragraphs: [
        "Our mission is to empower businesses and brands through innovative digital experiences that inspire, engage, and deliver real results.",
        "We believe that creativity and technology work best when combined with purpose, which is why we focus on designing meaningful solutions that help our clients grow in a competitive world.",
      ],
    },
    goal: {
      title: "Our company goal",
      paragraphs: [
        "Our goal is to become the leading technology partner for businesses worldwide, delivering exceptional value through innovative solutions.",
        "We are committed to fostering long-term partnerships with our clients by consistently exceeding expectations and driving measurable business outcomes.",
      ],
    },
  }

  return (
    <div className=" py-16 px-4 md:px-8 lg:px-16 inter">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 ">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Label */}
            <div  className="bg-gradient-to-r from-[#092846] to-[#06585C] bg-clip-text text-transparent font-semibold  inline-block">About Mission</div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl  text-[#1D293D] leading-tight">
              Our main goal to satisfied local & global clients
            </h1>

            {/* Tab Buttons */}
            <div className="flex gap-3 flex-wrap">
              {/* <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === "mission" ? "button text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Our Mission
              </button> */}
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === "mission" ? "button text-white" : "bg-gray-100 text-[#06585C] hover:bg-gray-200"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("goal")}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-300  cursor-pointer ${
                  activeTab === "goal" ? "button text-white" : "bg-gray-100 text-[#06585C] hover:bg-gray-200"
                }`}
              >
                Our Goal
              </button>
            </div>

            {/* Content Section */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl  bg-gradient-to-r from-[#092846] to-[#06585C] bg-clip-text text-transparent font-semibold  inline-block">{tabContent[activeTab].title}</h2>
              {tabContent[activeTab].paragraphs.map((paragraph, index) => (
                <p key={index} className="texts leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* TechVAR Label */}
            <div className=" top-6 right-6 z-10  px-4 py-2 flex justify-end  mb-2">
              <span className="font-bold text-lg">
                <img src={logo} alt="" />
              </span>
            </div>

            {/* Image Container */}
            <div className=" rounded-3xl overflow-hidden">
              {/* World Map Background */}
              <div className="absolute  z-0" />

              {/* Team Image */}
              <img
                src={mission}
                alt="TechVAR Team"
                className="w-full h-auto object-cover relative z-1"
              />

              {/* Overlay Gradient */}
              <div />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

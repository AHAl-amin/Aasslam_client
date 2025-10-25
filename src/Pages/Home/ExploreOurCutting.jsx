"use client"
import { motion } from "framer-motion"
import explor1 from '../../../public/img/home/explore/explor1.png'
import explor2 from '../../../public/img/home/explore/explor2.png'
import explor3 from '../../../public/img/home/explore/explor3.png'
import explor4 from '../../../public/img/home/explore/explor4.png'

function ExploreOurCutting() {
  const images = [
    {
      id: 1,
      src: explor1,
      alt: "Hardware cables and components",
    },
    {
      id: 2,
      src: explor2,
      alt: "Electronic equipment and circuit board",
    },
    {
      id: 3,
      src: explor3,
      alt: "Industrial welding and technical work",
    },
    {
      id: 4,
      src: explor4,
      alt: "Server and data center technician",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              Explore Our Cutting-Edge IT Solutions
            </motion.h2>

            <motion.p className="texts text-lg leading-relaxed mb-8" variants={itemVariants}>
              TechVAR delivers innovative hardware and software solutions that boost efficiency, security, and growth.
              From cloud and cybersecurity to collaboration and licensing, we help businesses stay ahead in a
              fast-evolving digital world.
            </motion.p>

            <motion.button
              className="inline-flex items-center justify-center gap-2 button hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-fit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {images.map((image) => (
              <motion.div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ExploreOurCutting

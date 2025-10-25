"use client"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"
import about1 from '../../../public/img/home/about/aboutus1.png'

import about2 from '../../../public/img/home/about/aboutus2.png'
import { FaCircleCheck } from "react-icons/fa6"
import { IoIosCheckmark } from "react-icons/io"

function AboutUs() {
    const services = [
        "Emergency Solutions Anytime",
        "Emergency Solutions Anytime",
        "Emergency Solutions Anytime",
        "Emergency Solutions Anytime",
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
            transition: { duration: 0.5 },
        },
    }

    return (
        <div className=" py-16 px-4 sm:px-6 lg:px-8 inter">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Images */}
                    <motion.div
                        className="relative h-96 sm:h-[500px] flex items-center justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Top Image */}
                
                          <motion.div
                            className="absolute top-0 left-0  md:left-20 xl:w-100 xl:h-2/3 w-64 sm:w-80 h-58 sm:h-64 rounded-3xl overflow-hidden shadow-lg z-10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={about1}
                                alt="Business team collaboration"
                                className="w-full h-full object-cover"
                            />
                            {/* Collaboration Icons Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent flex items-center justify-center gap-4 p-4">
                                <div className="bg-cyan-400/80 rounded-full p-3 backdrop-blur-sm">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                                <div className="bg-cyan-400/80 rounded-full p-3 backdrop-blur-sm">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                  

                        <motion.div
                            className="absolute   top-12 mr-20 bg-gradient-to-r from-[#092846] to-[#06585C]   font-semibold  inline-block    sm:right-8  text-white rounded-2xl px-6 sm:px-8  sm:py-6 shadow-xl z-20 text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-3xl sm:text-4xl ">25+</div>
                            <div className="text-sm sm:text-base">years experience</div>
                        </motion.div>


                        {/* Experience Badge */}

                        {/* Bottom Image */}
                        <motion.div
                            className="absolute xl:bottom-[-20px] lg:bottom-10 md:bottom-10 md:right-20 xl:w-80 xl:h-70 xl:right-30 right-0 w-64 sm:w-80 h-48 sm:h-64 rounded-3xl overflow-hidden shadow-lg z-20"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={about2}
                                alt="Team working together"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Label */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-[#092846] to-[#06585C] bg-clip-text text-transparent font-semibold  inline-block"
                        >
                            About Us
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl  text-[#1D293D] leading-tight">
                            One of the fastest way to gain business success
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
                            A Value-Added Reseller (VAR) is a technology partner that helps organizations choose, implement, and
                            manage hardware and software solutions. By working with OEMs, VARs enhance products through services such
                            as customization, deployment, training, and support.
                        </motion.p>

                        {/* Special Services Section */}
                        <motion.div variants={itemVariants} className="pt-4">
                            <h3 className="text-xl  bg-gradient-to-r from-[#092846] to-[#06585C] bg-clip-text text-transparent font-semibold  inline-block mb-4">Special services</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="w-6 h-6 bg-gradient-to-r from-[#12B2BA] to-[#06585C]  flex items-center justify-center rounded-full ">
                                            <IoIosCheckmark className="text- flex-shrink-0 text-gray-100" />
                                        </div>
                                        <span className="text-gray-700">{service}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Read More Button */}
                        <motion.button
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 button text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read more
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

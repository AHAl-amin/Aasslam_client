"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { IoIosArrowRoundForward } from "react-icons/io"
import bg from '../../../public/img/home/customarBanner.png'

export default function OurCustomer() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const testimonials = [
    {
      id: 1,
      name: "Rahim Rehman",
      rating: 5,
      quote: "Their server solution boosted our processing speed by 40% and cut maintenance costs significantly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahim",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-50",
      accentColor: "text-teal-600",
    },
    {
      id: 2,
      name: "Pappu Roy",
      rating: 5,
      quote: "Their server solution boosted our processing speed by 40% and cut maintenance costs significantly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pappu",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      accentColor: "text-blue-600",
    },
    {
      id: 3,
      name: "Ramisa Nanu",
      rating: 5,
      quote: "Their server solution boosted our processing speed by 40% and cut maintenance costs significantly.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ramisa",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      accentColor: "text-orange-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section
  className="pt-16 px-4 md:px-8 lg:px-16 lg:pb-40 pb-20 inter bg-cover bg-center bg-no-repeat inter"
  style={{ backgroundImage: `url(${bg})` }}
>
      <div className="container  mx-auto">
        <div className=" flex lg:flex-row flex-col-reverse  lg:gap-40 gap-10 ">
          {/* Left: Testimonial Cards */}
          <motion.div
            className="space-y-6 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${testimonial.bgColor} ${testimonial.borderColor} border-l-4 rounded-lg p-6 transition-all duration-300 ${
                  hoveredCard === testimonial.id ? "shadow-lg translate-x-2" : "shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full border-2 border-white flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <div className="flex gap-1 my-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={`${testimonial.accentColor} text-lg`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Title and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:space-y-20 space-y-10 w-full"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-16">What Our Customer <br /> Says</h2>
              <p className="texts text-lg leading-relaxed">
                Hear from our customers about how TechVAR solutions <br /> drive their success.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 button text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Read more
              <IoIosArrowRoundForward className='size-7' />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

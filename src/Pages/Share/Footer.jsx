import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#041A30] via-[#032526] to-[#0D1526] text-white py-12 px-6">
      <div className="container mx-auto">
        {/* Main Content Grid */}
        <div className="flex justify-between gap-8 mb-8 md:flex-row flex-col lg:pr-10">
          {/* Left Column - Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">TechVAR</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with advanced IT solutions and hardware customization for over 15 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <LuPhone className="text-[#00B0B9]" />
                <span>01980012351</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
               <MdOutlineMail className="text-[#00B0B9]" />
                <span>rahimofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
           <IoLocationOutline className="text-[#00B0B9]" />
                <span>Narayanganj, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hardware
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  IT Support & Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  AI Chatbot Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Payment Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Custom IT Infrastructure
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#929292] my-8"></div>

        {/* Copyright */}
        <div className="text-center text-[#929292] text-sm">
          <p>© 2025 TechVAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

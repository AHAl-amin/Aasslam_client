"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter } from "lucide-react"
import trustedBanner from '../../../public/img/home/trustedBanner.png'
import trustedImg from '../../../public/img/home/trustedImg.png'
import { div } from "framer-motion/client"
import { FiSend } from "react-icons/fi"

export default function ContactInfo() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        description: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Reset form
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            interest: "",
            description: "",
        })
    }

    return (
        <div className="block">

            <div className="relative">
            <div
                className="min-h-[70vh] bg-cover traslate-y-[-50%] bg-center bg-no-repeat py-16 px-4"
                style={{ backgroundImage: `url(${trustedBanner})` }}
            >
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Businesses Across Industries</h1>
                    <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                        We partner with organizations of every size and sector, delivering reliable IT solutions that drive lasting
                        success.
                    </p>
                </div>

                {/* Main Content */}

            </div>
            <div className="max-w-6xl mx-auto top-1/2 px-4 -mt-[18%] relative ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#FFFFFF] text-white p-10 rounded-3xl shadow mb-10 ">
                    {/* Contact Information Card */}
                    <div className="  p-8  bg-cover  bg-no-repeat rounded-tr-[8%]   " style={{ backgroundImage: `url(${trustedImg})` }}>
                        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                        <p className="text-gray-100 mb-8">Find all the details you need to reach our team quickly and easily.</p>

                        {/* Contact Items */}
                        <div className="space-y-10 mb-8">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                                    <Mail size={24} className="text-[#00B0B9]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-teal-100">rahimofficial@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                                    <Phone size={24} className="text-[#00B0B9]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone Number</h3>
                                    <p className="text-teal-100">01980012351</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                                    <MapPin size={24} className="text-[#00B0B9]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Location</h3>
                                    <p className="text-teal-100">Narayanganj, Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-4">
                                <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                                    <Clock size={24} className="text-[#00B0B9]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Business Hours</h3>
                                    <p className="text-teal-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-teal-100">Saturday: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 pt-6  ">
                            <a href="#" className="bg-[#15487C] bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
                                <Linkedin size={20} className="text-white" />
                            </a>
                            <a href="#" className="bg-[#15487C] bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a href="#" className="bg-[#15487C]  bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all">
                                <Twitter size={20} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Request a Quote Form */}
                    <div className=" rounded-3xl p-8 shadow-2xl">
                        <h2 className="text-3xl font-bold text-teal-900 mb-8">Request a Quote</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* First Name and Last Name */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter here"
                                        className="w-full px-4 py-3 placeholder:text-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter here"
                                        className="placeholder:text-gray-400 w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter here"
                                        className="placeholder:text-gray-400 w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter here"
                                        className="placeholder:text-gray-400 w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Enter here"
                                    className="placeholder:text-gray-400 w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                            </div>

                            {/* Select Interest In */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Interest In</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className=" appearance-none  w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-600"
                                >
                                    <option value="">Select service</option>
                                    <option value="hardware">Hardware Solutions</option>
                                    <option value="cloud">Cloud Services</option>
                                    <option value="software">Software Licensing</option>
                                    <option value="cybersecurity">Cybersecurity Solutions</option>
                                    <option value="infrastructure">Data Center & Infrastructure</option>
                                    <option value="collaboration">Collaboration & Productivity Tools</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Descriptions</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Write here"
                                    rows="4"
                                    className="placeholder:text-gray-400 w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className=" button text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Submit Request
                                <span><FiSend /></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

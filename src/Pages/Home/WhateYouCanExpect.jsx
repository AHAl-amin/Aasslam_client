"use client"

import { useState, useRef, useEffect } from "react"
import Expect from "../../../public/img/home/Expect.png"
import { GrSettingsOption } from "react-icons/gr"
import { FiUsers } from "react-icons/fi"
import { TbBrandReact } from "react-icons/tb"
import { SlLayers } from "react-icons/sl"

function WhateYouCanExpect() {
    const [activeCard, setActiveCard] = useState(null)
    const containerRef = useRef(null)

    const cards = [
        {
            id: 1,
            number: "01",
           
            title: "Optimize your IT investments.",
            description:
                "Transform your technology spend into long-term business growth and operational excellence.",
            icon: <GrSettingsOption />,
            iconBg: "#D0E8FF",
            iconColor: "#1181EE",
        },
        {
            id: 2,
            number: "02",
            title: "Enhance productivity",
            description:
                "Empower your teams with streamlined technology that simplifies workflows and accelerates results.",
            icon: <FiUsers />,
            iconBg: "#CFFAF5",
            iconColor: "#00A7A0",
        },
        {
            id: 3,
            number: "03",
            title: "Navigate resource constraints",
            description:
                "Balance priorities and resources with flexible technology strategies that drive results.",
            icon: <SlLayers />,
            iconBg: "#FFF3DB",
            iconColor: "#F59E0B",
        },
        {
            id: 4,
            number: "04",
            title: "React to technological advancements",
            description:
                "Adapt seamlessly to new technologies and maintain a competitive edge in a fast-changing landscape.",
            icon: <TbBrandReact />,
            iconBg: "#FBF1D7",
            iconColor: "#F0B41E",
        },
    ];


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setActiveCard(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleCardClick = (cardId) => {
        setActiveCard(activeCard === cardId ? null : cardId)
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4"
            style={{ backgroundImage: `url(${Expect})` }}
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What You Can Expect from a TechVAR</h2>
                    <p className="text-[#6A7282] text-lg max-w-4xl mx-auto">
                        Backed by decades of technical expertise, proven service offerings, award-winning partnerships, and deep
                        licensing knowledge, we deliver business advantages you simply can't buy off the shelf.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:mt-20">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            className={`relative cursor-pointer transition-all duration-300 transform ${activeCard === card.id ? "scale-105" : "hover:scale-102"
                                }`}
                        >
                            {activeCard === card.id ? (
                                <div className=" bg-gradient-to-l flex gap-5 from-[#06585C] xl:h-[200px] h-[300px] lg:h-[250px]  to-[#092846] rounded-2xl p-8 pb-20   shadow-lg relative">
                                    {/* Background number */}
                                    <div className="flex items-center justify-center w-20 h-13 bg-white bg-opacity-20 rounded-full mb-4">
                                        <span className="text-2xl">{card.icon}</span>
                                    </div>
                                    <div>
                                        <div className="absolute bottom-8 right-6 md:text-7xl text-5xl font-bold opacity-20 text-[#22e2ec]   " 
                                         
                                        >{card.number}</div>

                                        {/* Icon */}

                                        {/* Content */}
                                        <h3 className="text-2xl text-white  font-bold mb-3">{card.title}</h3>
                                        <p className="texth mb-6 ">{card.description}</p>
                                        <a href="#" className="inline-flex items-center absolute mb text-white font-semibold hover:gap-2 transition-all">
                                            Learn More <span className="ml-2">→</span>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                /* Default/Inactive state - light background */
                                <div className=" xl:h-[200px] lg:h-[250px] hover:bg-gradient-to-l  hover:from-[#06585C] hover:to-[#092846] relative rounded-2xl p-8   transition-all duration-700 hover:text-[#F9FAFB] ">
                                    <div className="flex gap-6 text">
                                        {/* Background number */}
                                        <div className="flex items-center justify-center w-14 h-14  rounded-full mb-4 ">
                                            <span
                                                className="text-2xl w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
                                                style={{
                                                    backgroundColor: card.iconBg,
                                                    color: card.iconColor,
                                                }}
                                            >
                                                {card.icon}
                                            </span>
                                        </div>
                                        <div className="hover:text-[#F9FAFB]">
                                            <div className="absolute bottom-4 right-6 md:text-7xl text-5xl font-bold opacity-10 text-[#22e2ec] "
                                        
                                            >
                                                {card.number}
                                            </div>

                                            {/* Icon */}

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold mb-3 ">{card.title}</h3>
                                            <p className=" text-[#6A7282] hover:texth ">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhateYouCanExpect

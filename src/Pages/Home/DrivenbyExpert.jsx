import React from 'react'
import Drivenimage from '../../../public/img/home/drivenImage.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
function DrivenbyExpert() {
  return (
    <div className='inter container mx-auto flex lg:flex-row xl:gap-20 md:px-6 xl:px-0 px-6 flex-col justify-between items-center lg:px-10 ' >
        <div className='xl:w-[60%] lg:w-[50%] w-100% space-y-10'>
        <h1 className='text-[#1D293D] lg:text-5xl md:text-4xl text-3xl font-semibold leading-16 '>Driven by Expertise. Trusted by Innovation.</h1>
        <p className='texts text-xl mt-16'>At TechVAR, trust is earned through proven performance, certified partnerships, and measurable results. Our experts combine deep technical knowledge with a customer-first approach to deliver secure, scalable, and tailored solutions — making us your reliable partner in digital transformation.</p>
        <button className='button texth flex items-center hover:gap-2 transition-all duration-500'>Read more <IoIosArrowRoundForward className='size-8' /></button>
        </div>
        <div className='xl:w-[40%] lg:w-[50%] w-100% py-10'>
            <img src={Drivenimage} alt=""  className=''/>
        </div>
    </div>
  )
}

export default DrivenbyExpert
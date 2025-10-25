import React from 'react'
import serviceBanner from '../../../public/img/home/service/servicebanner.png'
import { motion } from "framer-motion"
function ServiceBanner() {
  return (
      <div
      className="  bg-no-repeat bg-cover xl:py-34 lg:py-30  bg-center "
      style={{ backgroundImage: `url(${serviceBanner})` }}
    >
     <div className='container mx-auto space-y-10 xl:px-0 px-4'>
       <h1 className='font-bold lg:text-7xl md:text-5xl text-3xl lg:w-2/3 w-full texth lg:leading-22 md:leading-20 leading-10 '>Empowering Your Business Through Expert IT Services</h1>
      <p className='texth text-xl md:text-2xl  lg:w-1/2 w-full'>From strategy to implementation, we deliver secure, scalable solutions that move your business forward. </p>
      <motion.button>
        <button className='button texth'>Request a Quote</button>
      </motion.button>
     </div>
    </div>
  )
}

export default ServiceBanner

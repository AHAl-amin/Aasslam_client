import React from 'react'
import bannerImg from '../../../public/img/home/banner.png'

function AboutBanner() {
  return (
      <div
      className="  bg-no-repeat bg-cover lg:py-50 py-20 bg-center "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
     <div className='container mx-auto space-y-6 xl:px-0 px-4 flex flex-col justify-center items-center text-center'>
       <h1 className='font-bold lg:text-7xl md:text-5xl text-3xl lg:w-2/3 w-full texth lg:leading-22 md:leading-20 leading-10 '>About Us</h1>
      <p className='texth text-xl md:text-2xl  lg:w-1/2 w-full'>We provide hardware, customization, and enterprise IT services tailored to your business needs. </p>
     
     </div>
    </div>
  )
}

export default AboutBanner
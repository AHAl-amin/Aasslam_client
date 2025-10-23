import React from 'react'
import bannerImg from '../../../public/img/home/banner.png'
function Banner() {
  return (
      <div
      className="  bg-no-repeat bg-cover lg:py-50 py-20 bg-center "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
     <div className='container mx-auto space-y-10 xl:px-0 px-4'>
       <h1 className='font-bold lg:text-7xl md:text-5xl text-3xl lg:w-2/3 w-full texth lg:leading-22 md:leading-20 leading-10 '>Empowering Your Business  with Advanced IT Solutions.</h1>
      <p className='texth text-xl md:text-2xl  lg:w-1/2 w-full'>We provide hardware, customization, and enterprise IT services tailored to your business needs. </p>
      <button className='button texth'>Request a Quote</button>
     </div>
    </div>
  )
}

export default Banner


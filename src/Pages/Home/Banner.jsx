import React from 'react'
import bannerImg from '../../../public/img/home/banner.png'
function Banner() {
  return (
      <div
      className="  bg-no-repeat bg-cover py-52 bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
     <div className='container mx-auto space-y-10 '>
       <h1 className='font-bold text-7xl lg:w-2/3 texth leading-22'>Empowering Your Business  with Advanced IT Solutions.</h1>
      <p className='texth text-2xl  lg:w-1/2 w-full'>We provide hardware, customization, and enterprise IT services tailored to your business needs. </p>
      <button className='button texth'>Request a Quote</button>
     </div>
    </div>
  )
}

export default Banner


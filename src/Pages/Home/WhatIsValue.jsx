


import whateValueBanner from '../../../public/img/home/whateBanner.png'

function WhatIsValue() {
 



  return (
    <div className=" ">
      {/* Background Image Section */}
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat relative   mx-auto xl:py-40 md:py-20 py-20 "
        style={{
          backgroundImage: `url('${whateValueBanner}')`,
        }}
      >
       
        <div className=" flex md:flex-row flex-col xl:px-0 px-6 lg:gap-10 container mx-auto   ">
            <h1 className='text-[#1D293D] text-5xl font-bold lg:w-1/3 md:w-1/2 w-full leading-16 mb-10'>What is a Value-Added Reseller?</h1>
            <p className='text-xl text-[#45556C] lg:w-2/3 md:w-1/2 w-full'>A Value-Added Reseller (VAR) is a technology partner that helps organizations choose, implement, and manage hardware and software solutions. By working with OEMs, VARs enhance products through services such as customization, deployment, training, and support.</p>
        </div>
      </div>


    </div>
  )
}

export default WhatIsValue

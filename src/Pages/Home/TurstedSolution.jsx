import React from 'react'
import trustedBanner from '../../../public/img/home/turstedBanner.png'
import vedio from '../../../public/img/home/video.png'

function TurstedSolution() {
  return (
    <div className=''>
        <div
         className="flex-1 bg-cover bg-center bg-no-repeat relative   mx-auto  "
                style={{
                  backgroundImage: `url('${trustedBanner}')`,
                }}
        >
            <div>
               <div className='container mx-auto space-y-10 py-10 xl:px-0 px-6'>
                 <h1 className='texth text-7xl myanmar xl:w-[80%] w-full'>Trusted solutions, anywhere you are.</h1>
                <h1 className='text-[#CAD5E2] w inter xl:w-[80%] w-full leading-6'><span className='font-bold'>TechVAR</span> takes a human-centered approach to technology—because we believe IT should always be personal. You’ll have a trusted advisor dedicated to driving your success. We are known for our agility and forward-thinking mindset, focused on one goal: solving today’s complex IT challenges with comprehensive solutions that seamlessly evolve for tomorrow.</h1>
               </div>
                <img src={vedio} className='w-full' alt="" />
            </div>

        </div>

    </div>
  )
}

export default TurstedSolution
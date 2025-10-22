import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../public/img/home/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  const location = useLocation();
  const activeClass = 'text-blue-600 border-b-2 border-blue-600';

  return (
   <div>
     <nav className="bg-[#FFFFFF] pt-10 pb-3 px-6 shadow-md sticky top-0 z-50 shadow-black/20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className=" w-auto" />
        </div>

        <div className="hidden md:flex space-x-8">
          <div className="p-[1px] rounded bg-gradient-to-r from-[#00B0B9] to-[#0E61B1] inline-block relative">
            <CiSearch className='absolute top-[10px] left-1 size-5 text-gray-500 ' />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F4F4F4] pl-7 p-2 rounded w-full focus:outline-none "
            />
          </div>


          <div className="relative">
            <p className='w-3 h-3 absolute right-[-6px] bg-[#F86969] rounded-full'></p>
            <LuShoppingCart className='size-10 text-[#003366]' />
          </div>
          <div className="relative text-[#092846] font-semibold text-xl flex items-center">
            Request a Quote
          </div>

        </div>


      </div>
    </nav>
    <nav className='bg-gradient-to-l to-[#092846] from-[#06585C]'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
         
        </div>

        <div className="hidden md:flex space-x-8 texth py-4">
          <div className="">
           About
          </div>


          <div className="relative">
            Services
          </div>
         

          <div className="relative">
           Products
          </div>
         

          <div className="relative">
           Testimonials
          </div>
         

        </div>


      </div>
    </nav>
   </div>
  );
};

export default Navbar;

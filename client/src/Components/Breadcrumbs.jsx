import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = () => {
  return (
    <>
        <div className='flex items-center my-4 ml-2 md:ml-0 cursor-pointer '>
            <span className='text-black mr-4 hover:scale-95'>Home</span>
            <IoIosArrowForward className='text-gray-500 hover:scale-95' size={16}/>
        </div>
    </>
  )
}

export default Breadcrumbs
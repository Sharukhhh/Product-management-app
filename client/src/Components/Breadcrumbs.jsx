import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Breadcrumbs = ({isProductPage}) => {
  return (
    <>
        <div className='flex items-center my-2 ml-2 md:ml-0 cursor-pointer '>
          <Link to={'/home'}>
            <span className='text-black mr-4 hover:scale-95'>Home</span>
          </Link>
            <IoIosArrowForward className='text-gray-500 hover:scale-95' size={16}/>
          

          {isProductPage && (
            <>
              <span className='text-black mr-4 hover:scale-95'>Product</span>
              <IoIosArrowForward className='text-gray-500 hover:scale-95' size={16}/>
            </>
          )}
        </div>
    </>
  )
}

export default Breadcrumbs
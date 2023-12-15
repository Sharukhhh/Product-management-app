import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
        <nav className='bg-custom-blue p-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='flex-grow flex items-center justify-center md:justify-start'>
                    <input type="search" name="" placeholder='Search here'
                    className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-400"
                    />

                    <button className='bg-custom-amber text-white px-4 py-2 rounded-r-md  focus:outline-none'>
                        Search
                    </button>
                </div>

                <div className='flex items-center mt-4 md:mt-0 space-x-4'>
                    <FaCartArrowDown className="text-white text-2xl" />

                    <span className='text-white'>John Doe</span>
                    <button className='text-white hover:underline'>Logout</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar
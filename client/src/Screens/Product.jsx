import React from 'react'
import NavBar from '../Components/NavBar'
import Breadcrumbs from '../Components/Breadcrumbs'

const Product = () => {
  return (
    <>
        <NavBar/>
        <Breadcrumbs/>

        <div className='container mx-auto mt-8 flex flex-col md:flex-row items-stretch'>
            <div className='w-full md:w-2/3 md:pr-4'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                        <img src="" alt="first product" 
                        className='w-full h-auto mb-4'/>

                        <div className='flex flex-wrap'>
                            <div className='w-1/2 p-2'>
                                <img src="" alt="2nd image" 
                                className='w-full h-auto'/>
                            </div>
                            <div className='w-1/2 p-2'>
                                <img src="" alt="3rd image" 
                                className='w-full h-auto'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/3 md:pl-4'>
                <h2 className='text-xl font-bold mb-4'>Product Name</h2>
                <p className='text-lg font-bold mb-2'>$99.99</p>
                <p className='text-gray-500 mb-2'>Stock Availability: In Stock</p>
                <p className='text-gray-500 mb-2'>RAM Size: 8GB</p>

                <div className='flex items-center mb-4'>
                    <button className='text-2xl font-bold'>-</button>
                    <p className='mx-4 text-xl font-bold'>1</p>
                    <button className='text-2xl font-bold'>+</button>
                </div>

                <div className='flex space-x-4 mb-4'>
                    <button className='bg-custom-amber text-white px-4 py-2 rounded'>
                        Edit Product
                    </button>
                    <button className='bg-custom-amber text-white px-4 py-2 rounded'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product
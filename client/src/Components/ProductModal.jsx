import React from 'react'

const ProductModal = ({onClose}) => {
  return (
    <>
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-opacity-50 backdrop-blur-sm overflow-y-auto'>
            <div className='relative mx-auto my-6 max-w-xl w-full'>
                <div className='bg-neutral-50 p-8 rounded-lg shadow-xl border-black border'>
                    <h2 className='text-2xl font-bold mb-6'>Add Product</h2>

                    <form>
                        <div className='mb-6'>
                            <label htmlFor='productName' className='block text-sm font-medium text-gray-700'>
                                Product Name:
                            </label>
                            <input
                            type='text'
                            name='productName'
                            id='productName'
                            className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>

                        <div className='flex mb-6'>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="ram" className='block text-sm font-medium text-gray-700'>
                                    RAM size : 
                                </label>

                                <input type="text" name="ram" id="ram" 
                                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                            </div>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="price" className='block text-sm font-medium text-gray-700'>
                                    Price : 
                                </label>

                                <input type="text" name="price" id="price" 
                                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                            </div>
                        </div>

                        <div className='flex mb-6'>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="stock" className='block text-sm font-medium text-gray-700'>
                                    Stock : 
                                </label>

                                <input type="text" name="stock" id="stock" 
                                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'/>
                            </div>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="stock" className='block text-sm font-medium text-gray-700'>
                                    Add Sub Category : 
                                </label>
                            </div>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='productDescription' className='block text-sm font-medium text-gray-700'>
                                Description:
                            </label>
                            <textarea
                                name='description'
                                id='description'
                                rows='3'
                                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            ></textarea>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='productImage' className='block text-sm font-medium text-gray-700'>
                                Product Image:
                            </label>
                            <input
                                type='file'
                                name='image'
                                id='productImage'
                                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>

                        <div className='flex justify-center'>
                            <button type='submit'
                            className='inline-flex justify-center px-4 py-2 mr-3 text-sm font-medium text-white rounded-md
                            bg-custom-amber border border-transparent rounded-mdfocus:outline-none focus:ring-2 focus:ring-offset-2'>
                                SAVE
                            </button>

                            <button type='button' onClick={onClose}
                            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-black rounded-md
                            bg-neutral-100 border-black border-transparent rounded-mdfocus:outline-none focus:ring-2 focus:ring-offset-2'>
                                DISCARD
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductModal
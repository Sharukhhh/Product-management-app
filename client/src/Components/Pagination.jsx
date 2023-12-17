import React from 'react'

const Pagination = ({totalItems , itemsPerPage, currentPage ,onPageChange}) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <>
        <div className='flex justify-center mt-8'>
            <button onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='bg-gray-300 px-4 py-2 rounded-l cursor-pointer mr-2'>
                Previous
            </button>

            {Array.from({length : totalPages}, (_ , index) => (
                <button key={index + 1} 
                onClick={() => onPageChange(index + 1)}
                className={`${
                    currentPage === index + 1 ? "bg-custom-amber text-white" : "bg-gray-300"
                } px-4 py-2 cursor-pointer`}
                >
                    {index + 1}
                </button>
            ))}
            

            <button onClick={() => onPageChange(currentPage + 1)} 
            disabled = {currentPage === totalPages}
            className='bg-gray-300 px-4 py-2 rounded-r cursor-pointer ml-2'>
                Next
            </button>
        </div>
    </>
  )
}

export default Pagination
import React, { useEffect, useState } from 'react'
import { addMainCategory, addSubCategory } from '../calls/apiCalls';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { axios } from "../../Api/axios"

const Modal = ({title , onClose, categoriess ,  isSubCategory}) => {

    const navigate = useNavigate();

    const [categories , setCategories] = useState([]);
    const [mainCategory , setMainCategory] = useState('');
    const [subCategory , setSubCategory] = useState('');
    const [selectedMainCategory , setSelectedMainCategory] = useState('');

    useEffect(() => {
        setCategories(categoriess);
    } , [categoriess])

    //to submit main category form
    const handleCategorySubmit = async (e) => {
        e.preventDefault();

        if(!mainCategory){
            return;
        }

        try {
            const response = await addMainCategory(mainCategory );

            if(response.message){
                setMainCategory('');
                onClose();
                toast.success(response.message);
            }

        } catch (error) {
            toast.error(error.response.data.error);
        }

    }

    //to submit sub category form
    const handleSubCategorySubmit = async (e) => {
        e.preventDefault();

        if(!subCategory && !selectedMainCategory){
            return;
        }

        try {
            const response = await addSubCategory({subCategory , selectedMainCategory});

            if(response.message){
                setSelectedMainCategory('');
                onClose()
                toast.success(response.message);
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }


    }


  return (
    <>
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-opacity-50 backdrop-blur-sm overflow-y-auto'>
            <div className='relative mx-auto my-6 max-w-md w-full '>
                <div className='bg-neutral-50 p-10 rounded shadow-xl border-black border'>
                    <div className='flex justify-center items-center mb-4'>
                        <h2 className='text-xl font-bold'>{title}</h2>
                    </div>

                    <form onSubmit={isSubCategory ? handleSubCategorySubmit : handleCategorySubmit} >
                        {isSubCategory && (
                            <>
                                <div className='mb-4'>
                                    <select name="mainCategory" id="maincategory"
                                    value={selectedMainCategory} onChange={(e) => setSelectedMainCategory(e.target.value)}
                                    className='mt-1 block w-full border-gray-300 rounded-md shadow-sm
                                    focus:ring-indigo-500 focus:border-indigo-500 p-2 sm:text-sm'>
                                        <option value="">Select Main Category</option>
                                        {categories?.map((category) => (
                                            <option key={category?._id} value={category?._id}>
                                                {category?.categoryName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </> 
                        )}       

                            <div className='mb-4'>
                                <input type="text" 
                                name={isSubCategory ? 'subCategoryName' : 'categoryName'} 
                                id="" 
                                onChange={
                                    isSubCategory ? (e) => setSubCategory(e.target.value) 
                                    : (e) => setMainCategory(e.target.value)
                                }
                                value={isSubCategory ? subCategory : mainCategory}
                                placeholder={isSubCategory ? 'Add Sub Category' : 'Add Category'}
                                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm'/>
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

export default Modal
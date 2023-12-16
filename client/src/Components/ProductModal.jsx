import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { productValidateSchema } from '../Validation/validate'
import {useDropzone} from 'react-dropzone';
import { axios } from '../../Api/axios';
import toast from 'react-hot-toast';

const ProductModal = ({onClose , subCategoriess}) => {

    const [subCategories , setSubCategories] = useState([]);

    useEffect(() => {
        setSubCategories(subCategoriess)
    }, [subCategoriess])

    const formik = useFormik({
        initialValues : {
            productName : '' , ramSize: '',
            stock : 0 , price  : '',
            description : '' ,
            subCategory : '',
            images : []
        },
        validationSchema : productValidateSchema,
        onSubmit : async (values) => {
            try {
                const formData = new FormData();
                formData.append('productName', values.productName);
                formData.append('ramSize', values.ramSize);
                formData.append('price', values.price);
                formData.append('stock', values.stock);
                formData.append('description', values.description);
                formData.append('subCategory', values.subCategory);

                if (values.images.length > 0) {
                    values.images.forEach((image, index) => {
                        formData.append(`images`, image);
                    });
                }

                const response = await axios.post('/add_product' , formData)

                console.log(response);

                if(response.data.message){
                    onClose();
                    toast.success(response.data.message);
                }
            } catch (error) {
                toast.error(error.response.data.error || error.message || 'An error occured');
            }
        }
    })

    const removeImage = (index) => {
        const updatedImages = [...formik.values.images];
        updatedImages.splice(index , 1);
        formik.setFieldValue('images' , updatedImages)
    }

    const onDrop = (acceptedFiles) => {
        if(formik.values.images.length < 3){
            const imageFiles = acceptedFiles.filter(file => file.type.startsWith('image/'));
            formik.setFieldValue('images' , [...formik.values.images , ...imageFiles])
        }
    };

    const {getRootProps , getInputProps} = useDropzone({
        onDrop,
        accept : 'image/*',
        maxFiles : 3 - formik.values.images.length
    })
  return (
    <>
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden bg-opacity-50 backdrop-blur-sm overflow-y-auto'>
            <div className='relative mx-auto my-6 max-w-xl w-full'>
                <div className='bg-gray-50 p-8 rounded-lg shadow-xl border-black border'>
                    <h2 className='text-2xl font-bold mb-6'>Add Product</h2>

                    <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className='text-left'>
                        <div className='mb-6'>
                            <label htmlFor='productName' className='block text-sm font-medium text-gray-700'>
                                Product Name:
                            </label>
                            <input
                            type='text'
                            name='productName'
                            id='productName'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productName}
                            className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                                formik.touched.productName && formik.errors.productName ? 'border-red-500' : ''
                            }`}
                            />
                            {formik.touched.productName && formik.errors.productName && (
                                <div className='text-red-500'>{formik.errors.productName}</div>
                            )}
                        </div>

                        <div className='flex mb-6'>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="ram" className='block text-sm font-medium text-gray-700'>
                                    RAM size : 
                                </label>

                                <input type="text" name="ramSize" id="ram" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ramSize}
                                className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                                    formik.touched.ramSize && formik.errors.ramSize ? 'border-red-500' : ''
                                }`}
                                />
                            {formik.touched.ramSize && formik.errors.ramSize && (
                                <div className='text-red-500'>{formik.errors.ramSize}</div>
                            )}
                            </div>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="price" className='block text-sm font-medium text-gray-700'>
                                    Price : 
                                </label>

                                <input type="text" name="price" id="price"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.price}
                                className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                                    formik.touched.price && formik.errors.price ? 'border-red-500' : ''
                                }`}
                                />
                                {formik.touched.price && formik.errors.price && (
                                    <div className='text-red-500'>{formik.errors.price}</div>
                            )}
                            </div>
                        </div>

                        <div className='flex mb-6'>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="stock" className='block text-sm font-medium text-gray-700'>
                                    Stock : 
                                </label>

                                <input type="number" name="stock" id="stock"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                                value={formik.values.stock}
                                className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                                    formik.touched.stock && formik.errors.stock ? 'border-red-500' : ''
                                }`}
                                />
                                {formik.touched.stock && formik.errors.stock && (
                                    <div className='text-red-500'>{formik.errors.stock}</div>
                                )}
                            </div>
                            <div className='w-1/2 pr-2'>
                                <label htmlFor="stock" className='block text-sm font-medium text-gray-700'>
                                    Add Sub Category : 
                                </label>
                                <select name="subCategory" 
                                id="subCategory"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subCategory}
                                className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                >
                                    <option value=''>Select Subcategory</option>
                                    {subCategories.map((sub) => (
                                        <option key={sub?._id} value={sub?._id}>{sub?.subcategoryName}</option>
                                    ))}
                                    
                                </select>
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                                className={`mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                                    formik.touched.description && formik.errors.description ? 'border-red-500' : ''
                                }`}
                            >

                            </textarea>
                            {formik.touched.description && formik.errors.description && (
                                <div className='text-red-500'>{formik.errors.description}</div>
                            )}
                        </div>

                        <div className='mb-6'>
                            <label htmlFor='productImage' className='block text-sm font-medium text-gray-700'>
                                Product Image:
                            </label>
                            <div {...getRootProps()} 
                            className='mt-1 p-4 border-dashed border-2 border-gray-300 rounded-md cursor-pointer'>
                                <input{...getInputProps()} name='images'  />
                                <p >Drag 'n' drop an image here, or click to select one</p>
                                <div className='flex mt-2 space-x-2'>
                                    {formik.values.images.map((file , index) => (
                                        <div key={index} className='relative'>
                                            <img src={URL.createObjectURL(file)} 
                                            alt="img" 
                                            className='h-16 w-16 object-cover rounded-md'
                                            />
                                            <button
                                            type='button'
                                            onClick={() => removeImage(index)}
                                            className='absolute top-0 right-0 p-1 bg-white rounded-full'
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
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
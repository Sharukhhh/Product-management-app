import React, { useEffect, useState , lazy , Suspense } from 'react'
import NavBar from '../Components/NavBar'
import Breadcrumbs from '../Components/Breadcrumbs'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../calls/apiCalls'
import toast from 'react-hot-toast'

const ProductModal = lazy(() => import('../Components/ProductModal'));

const Product = () => {
    const {id} = useParams();
    const [product , setProduct] = useState([]);
    const [count , setCount] = useState(0);
    const [editModal , setEditModal] = useState(false);
    const [editItemId , setEditItemId] = useState('');

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await getSingleProduct(id);
                setProduct(response);
            } catch (error) {
                console.log(error);
            }
        }

        getProduct();
    },[id])

    const handleDecrement = () => {
        if(count <= 0){
            return
        } else {
            setCount((prevCount) => prevCount - 1)
        }
    }

    const openEditModal = (productId) => {
        setEditItemId(productId);
        setEditModal(true);
    }

    const closeEditModal = () => {
        setEditModal(false);
    }
  return (
    <>
        <NavBar/>
        <Breadcrumbs isProductPage={true}/>

        {product?.map((item) => (
            <div key={item?._id} className='container mx-auto mt-10 flex flex-col md:flex-row items-stretch'>
                <div className='w-full md:w-2/3 md:pr-4'>
                    <div className='flex flex-wrap'>
                        {item?.images.length > 0 ? (
                            <div className='w-full md:w-1/2 lg:w-1/3 p-4 align-middle'>
                                <img src={item?.images[0]} alt="first product" 
                                className='w-full h-auto object-cover mb-4'/>

                                <div className='flex flex-wrap'>
                                    <div className='w-1/2 p-2'>
                                        <img src={item?.images[1]} alt="2nd image" 
                                        className='w-full object-cover h-auto'/>
                                    </div>
                                    <div className='w-1/2 p-2'>
                                        <img src={item?.images[2]} alt="3rd image" 
                                        className='w-full object-cover h-auto'/>
                                    </div>
                                </div>
                            </div>
                        ) : (null)}    
                    </div>
                </div>

                <div className='w-full md:w-1/3 md:pl-4 text-left'>
                    <h2 className='text-xl font-bold mb-4'>{item?.productName}</h2>
                    <p className='text-lg font-bold mb-2'>{item?.price}</p>
                    {item?.stock > 0 ? (
                        <p className='text-green-500 mb-2'>Stock Availability: In Stock</p>
                    ) : (
                        <p className='text-red-500 mb-2'>Stock Availability: Out Of stock</p>
                    )}
                    <p className='text-gray-500 mb-2'>{item?.ramSize}</p>

                    <div className='flex items-center mb-4'>
                        <button onClick={handleDecrement}
                        className='text-2xl font-bold shadow-md bg-slate-200 px-2 rounded-md'>-</button>
                        <p className='mx-4 text-xl font-bold'>{count}</p>
                        <button onClick={() => {
                            if(count >= item?.stock){
                                return toast.error('Stock limit exceeded!');
                            }
                            setCount((prev) => prev + 1);
                        }}
                        className='text-2xl font-bold shadow-md bg-slate-200 px-2 rounded-md'>+</button>
                    </div>

                    <div className='flex space-x-4 mb-4'>
                        <button onClick={() => openEditModal(item?._id)}
                        className='bg-custom-amber text-white px-4 py-2 rounded'>
                            Edit Product
                        </button>
                        <button className='bg-custom-amber text-white px-4 py-2 rounded'>
                            Add To Wishlist
                        </button>
                    </div>
                </div>
            </div>
        ))}    

        {editModal && (
            <Suspense fallback={<div>Loading....</div>}>
                <ProductModal
                onClose={closeEditModal}
                editId={editItemId}
                />
            </Suspense>
        )}
        
    </>
  )
}

export default Product
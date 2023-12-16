import React, { useState , lazy , Suspense, useEffect} from 'react';
import NavBar from '../Components/NavBar';
import Breadcrumbs from '../Components/Breadcrumbs';
import { getMainCategories, getSubCategories } from '../calls/apiCalls';

const Modal = lazy(() => import('../Components/Modal'));
const ProductModal = lazy(() => import('../Components/ProductModal'));

const Home = () => {

  const [isCategoryModal, setIsCategory] = useState(false);
  const [isSubCategoryModal , setIsSubCategoryModalOpen] = useState(false);
  const [productModal , setProductModal] = useState(false);
  const [categories , setCategories] = useState([]);
  const [subCategories , setSubCategories] = useState([]);

  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await getMainCategories();
        if(response){
          setCategories(response);
        }
      } catch (error) {
        
      }
    }

    fetchMainCategories();
  }, []);

  useEffect(() => {
    const fetcSubCategories = async () => {
      try {
        const response = await getSubCategories();
        if(response){
          setSubCategories(response);
        }
      } catch (error) {

      }
    }

    fetcSubCategories();
  }, []);



  const openCategoryModal = () => {
    setIsCategory(true);
  }
  const closeCategoryModal = () => {
    setIsCategory(false);
  }

  const openSubCategoryModal = () => {
    setIsSubCategoryModalOpen(true);
  }
  const closeSubCategoryModal =() => {
    setIsSubCategoryModalOpen(false);
  }

  const openProductModal = () => {
    setProductModal(true);
  }
  const closeProductModal = () => {
    setProductModal(false);
  }

  return (
    <>
        <NavBar/>

        <div className='container mx-auto mt-8 flex py-3 px-2 bg-transparent flex-col md:flex-row items-center'>
          <div className='flex flex-col md:flex-row md:items-center md:ml-auto'>

            <button onClick={openCategoryModal}
            className='mb-2 md:mb-0 md:mr-2 bg-custom-amber text-white px-4 py-2 rounded'>
              Add Category
            </button>

            <button onClick={openSubCategoryModal}
            className='mb-2 md:mb-0 md:mr-2 bg-custom-amber text-white px-4 py-2 rounded'>
              Add Sub Category
            </button>

            <button onClick={openProductModal}
            className='bg-custom-amber text-white px-4 py-2 rounded'> 
              Add Product
            </button>
          </div>
        </div>

        <Breadcrumbs/>

        <div className='container mx-auto mt-8 flex flex-col md:flex-row items-stretch'>
          <div className='w-full md:w-1/3 md:pr-4 md:mb-2 md:text-left'>
            <div className='bg-white p-4 rounded-md mb-4'>
              <h2 className='text-lg font-bold'>Categories</h2>

              <p className='text-gray-500 mb-2'>All Categories</p>

              <ul>
                <li className='cursor-pointer hover:underline'>
                  Category 1
                  <ul className='ml-4'>
                    <li>
                      <input type="checkbox" /> Sub category 1
                    </li>
                    <li>
                      <input type="checkbox" /> Sub category 1
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full md:w-2/3'>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='bg-white border rounded-lg overflow-hidden'>
                  {/* <span className='absolute top-0 right-0 text-red-500'>
                    ❤️
                  </span> */}

                  <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" 
                  className='h-40 w-full object-cover mb-2' alt="product img" />

                  <p className='text-sm font-bold mb-1'>Product Name</p>

                  <p className='text-gray-500 text-sm'>$99.99</p>
                </div>
              </div>

              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='bg-white border rounded-lg overflow-hidden'>
                  {/* <span className='absolute top-0 right-0 text-red-500'>
                    ❤️
                  </span> */}

                  <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" 
                  className='h-40 w-full object-cover mb-2' alt="product img" />

                  <p className='text-sm font-bold mb-1'>Product Name</p>

                  <p className='text-gray-500 text-sm'>$99.99</p>
                </div>
              </div>

              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='bg-white border rounded-lg overflow-hidden'>
                  {/* <span className='absolute top-0 right-0 text-red-500'>
                    ❤️
                  </span> */}

                  <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" 
                  className='h-40 w-full object-cover mb-2' alt="product img" />

                  <p className='text-sm font-bold mb-1'>Product Name</p>

                  <p className='text-gray-500 text-sm'>$99.99</p>
                </div>
              </div>

              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='bg-white border rounded-lg overflow-hidden'>
                  {/* <span className='absolute top-0 right-0 text-red-500'>
                    ❤️
                  </span> */}

                  <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" 
                  className='h-40 w-full object-cover mb-2' alt="product img" />

                  <p className='text-sm font-bold mb-1'>Product Name</p>

                  <p className='text-gray-500 text-sm'>$99.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {isCategoryModal && (
          <Suspense fallback={<div>Loading....</div>}>
            <Modal 
            title={'Add Category'} 
            onClose={closeCategoryModal}
            isSubCategory={false}
            />
          </Suspense>
        )}

        {isSubCategoryModal && (
          <Suspense fallback={<div>Loading....</div>}>
            <Modal 
            title={'Add Sub Category'}
            onClose={closeSubCategoryModal}
            isSubCategory={true}
            categoriess={categories}
            />
          </Suspense>
        )}

        {productModal && (
          <Suspense fallback={<div>Loading....</div>}>
            <ProductModal
            onClose={closeProductModal}
            subCategoriess={subCategories}
            />
          </Suspense>
        )}

    </>
  )
}

export default Home
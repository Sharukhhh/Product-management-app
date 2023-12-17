import React, { useState , lazy , Suspense, useEffect} from 'react';
import NavBar from '../Components/NavBar';
import Breadcrumbs from '../Components/Breadcrumbs';
import { getMainCategories, getSubCategories , getProducts } from '../calls/apiCalls';
import { Link } from 'react-router-dom';
import Pagination from '../Components/Pagination';

const Modal = lazy(() => import('../Components/Modal'));
const ProductModal = lazy(() => import('../Components/ProductModal'));

const Home = () => {

  const [updateUI , setUpdateUI] = useState(false);
  const [isCategoryModal, setIsCategory] = useState(false);
  const [isSubCategoryModal , setIsSubCategoryModalOpen] = useState(false);
  const [productModal , setProductModal] = useState(false);
  const [categories , setCategories] = useState([]);
  const [subCategories , setSubCategories] = useState([]);
  const [products , setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubCategory , setSelectedSubCategory] = useState([]);

  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await getMainCategories();
        if(response){
          setCategories(response);
        }
      } catch (error) {
        throw error;
      }
    }

    fetchMainCategories();
  }, [updateUI]);

  useEffect(() => {
    const fetcSubCategories = async () => {
      try {
        const response = await getSubCategories();
        if(response){
          setSubCategories(response);
        }
      } catch (error) {
        throw error;
      }
    }

    fetcSubCategories();
  }, [updateUI]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await getProducts();
        if(response){
          setProducts(response);
        }
      } catch (error) {
        throw error;
      }
    }

    getAllProducts();
  },[updateUI]);



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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  const handleSubCategoryChange = (subId) => {
    if(selectedSubCategory.includes(subId)){
      setSelectedSubCategory((prev) => prev.filter((id) => id !== subId));
    } else {
      setSelectedSubCategory(prev => [...prev , subId]);
    }
  }

  const startIndex = (currentPage - 1) * 6;
  const endIndex = currentPage * 6;

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

        <Breadcrumbs isProductPage={false}/>

        <div className='container mx-auto mt-8 flex flex-col md:flex-row items-stretch'>
          <div className='w-full md:w-1/3 md:pr-4 md:mb-2 md:text-left'>
            <div className='bg-white p-4 rounded-md mb-4'>
              <h2 className='text-lg font-bold'>Categories</h2>

              <p className='text-gray-500 mb-2'>All Categories</p>

              <ul>
                {categories.map((main) => (
                <li key={main?._id} className='cursor-pointer hover:underline'>
                  {main?.categoryName}
                  <ul className='ml-4'>
                    {subCategories?.filter((sub) => sub?.mainCategory === main?._id)
                    .map((sub) => (
                      <li key={sub?._id}>
                        <input
                        onChange={() => handleSubCategoryChange(sub?._id)}
                        checked={selectedSubCategory.includes(sub?._id)}
                        type="checkbox" 
                        /> {sub?.subcategoryName}
                      </li>
                    ))}  
                  </ul>
                </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='w-full md:w-2/3'>
            <div className='flex flex-wrap'>
              {products?.
              filter(product => {
                if(selectedSubCategory.length === 0){
                  return true;
                }
                return selectedSubCategory.some(subId => product.subCategory.includes(subId))
              })
              .slice(startIndex , endIndex)?.map((product) => (
                <div key={product?._id} className='w-full md:w-1/2 lg:w-1/3 p-2' title='view product'>
                  <Link to={`/product/${product?._id}`}>
                    <div className='bg-white border rounded-lg overflow-hidden p-2'>
                      {product?.images?.length > 0 ? (
                        <img src={product?.images[0].replace(/"/g,"")} alt="" 
                        className='h-40 w-full object-cover mb-2'/>
                      ) : (
                        <img src={''} alt="" 
                        className='h-40 w-full object-cover mb-2'/>
                      )}

                      <p className='text-sm font-bold mb-1 truncate'>{product?.productName}</p>

                      <p className='text-gray-500 text-sm truncate'>{product?.price}</p>

                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Pagination
        totalItems={products.length}
        itemsPerPage={6}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        />


        {isCategoryModal && (
          <Suspense fallback={<div>Loading....</div>}>
            <Modal 
            title={'Add Category'} 
            onClose={closeCategoryModal}
            isSubCategory={false}
            handleUpdateUI={setUpdateUI}
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
            handleUpdateUI={setUpdateUI}
            />
          </Suspense>
        )}

        {productModal && (
          <Suspense fallback={<div>Loading....</div>}>
            <ProductModal
            onClose={closeProductModal}
            subCategoriess={subCategories}
            handleUpdateUI={setUpdateUI}
            />
          </Suspense>
        )}

    </>
  )
}

export default Home
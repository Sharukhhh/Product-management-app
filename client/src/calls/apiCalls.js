import toast from "react-hot-toast";
import { axios } from "../../Api/axios"



export const addMainCategory = async (categoryData) => {
    try {
        const response = await axios.post('/add_category' , { category : categoryData})
        
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addSubCategory = async (subCategoryData) => {
    try {
        console.log(subCategoryData );
        const response = await axios.post('/add_subcategory' , {subCategoryData })

        return response.data;

    } catch (error) {
        throw error;
    }
}

export const getMainCategories = async () => {
    try {
        const response = await axios.get('/categories')

        return response.data.categories;

    } catch (error) {
        throw error;
    }
}

export const getSubCategories = async () => {
    try {
        const response = await axios.get('/subcategories')

        return response.data.subcategories;

    } catch (error) {
        throw error;
    }
}


export const getProducts = async () => {
    try {
        const response = await axios.get('/products');

        return response.data.products;
    } catch (error) {
        throw error;
    }
}


export const getSingleProduct = async (productId) => {
    try {
        const response = await axios.get(`/single/${productId}`)

        return response.data.product;
    } catch (error) {
        throw error;
    }
}
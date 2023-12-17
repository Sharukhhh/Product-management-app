import express from 'express';
import { createMainCategory, createSubCategory, displayMainCategories, displaySubCategories } from '../controllers/category.js';
const router = express.Router();
import { upload } from '../utils/multer.js';
import { addNewProduct, displayProducts, getSingleProductDetails } from '../controllers/product.js';

// ROUTES for Category Management
router.post('/add_category' , createMainCategory);

router.post('/add_subcategory' , createSubCategory);

router.get('/categories' , displayMainCategories);

router.get('/subcategories' , displaySubCategories);


//ROUTES for Product Management
router.post('/add_product' , upload.array('images' , 3) , addNewProduct);

router.get('/products' , displayProducts);

router.get('/single/:productId' , getSingleProductDetails);


export default router;
import express from 'express';
import { createMainCategory, createSubCategory, displayMainCategories, displaySubCategories } from '../controllers/category.js';
const router = express.Router();
import { upload } from '../utils/multer.js';


router.post('/add_category' , createMainCategory);

router.post('/add_subcategory' , createSubCategory);

router.get('/categories' , displayMainCategories);

router.get('/subcategories' , displaySubCategories);


export default router;
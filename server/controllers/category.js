import categoryModel from "../models/categoryModel.js";
import subCategoryModel from "../models/subCategoryModel.js";


/*
DESCRIPTION : Function to Add Main category
ROUTE : /add_category
*/
export const createMainCategory = async (req, res) => {
    try {
        
        const { category } = req.body;

        if(category){

            let isCategoryExists = await categoryModel.findOne({categoryName : category});

            if(isCategoryExists){
                return res.status(409).json({error : 'Category Already Exists'});
            }

            await categoryModel.create({
                categoryName : category
            });

            return res.status(201).json({message : 'Category Added'});
        }
    } catch (error) {
        console.log(error);
    }
}


/*
DESCRIPTION : Function to Display Main Categories
ROUTE : /categories
*/
export const displayMainCategories = async (req, res) => {
    try {
        
        const categories = await categoryModel.find();

        if(!categories){
            return res.status(404).json({error : 'No main categories'})
        }

        return res.json({message : 'Success' , categories});

    } catch (error) {
        console.log(error);
    }
}



/*
DESCRIPTION : Function to Add Sub Category
ROUTE : /add_subcategory
*/
export const createSubCategory = async (req, res) => {
    try {
        const { subCategoryData } = req.body;
        
        const { subCategory,  selectedMainCategory } = subCategoryData;

        if(subCategory && selectedMainCategory){

            let subCategoryExists = await subCategoryModel.findOne({subcategoryName : subCategory});

            if(subCategoryExists){
                return res.status(409).json({error : 'Category Already Exists'});
            }

            const mainCategoryExists = await categoryModel.findOne({_id : selectedMainCategory});


            if(!mainCategoryExists){
                return res.status(404).json({error : 'Main Category Not found'});
            }

            await subCategoryModel.create({
                mainCategory : mainCategoryExists._id,
                subcategoryName : subCategory
            })

            return res.status(201).json({message : 'Sub Category Added'});
        }

    } catch (error) {
        console.log(error);
    }
}


/*
DESCRIPTION : Function to show sub categories
ROUTE : /subcategories
*/
export const displaySubCategories = async (req, res) => {
    try {

        const requiredCategoryName = 'Laptop';

        const mainCategory = await categoryModel.findOne({categoryName : requiredCategoryName});

        if(!mainCategory){
            return res.status(404).json({error : 'Not found'});
        }

        const subcategories = await subCategoryModel.find({mainCategory : mainCategory._id });

        if(!subcategories){
            return res.status(404).json({error : 'No sub categories found'})
        }

        return res.json({message : 'success' , subcategories});
        
    } catch (error) {
        console.log(error)
    }
}
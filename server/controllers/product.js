import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";
import subCategoryModel from "../models/subCategoryModel.js";



/*
DESCRIPTION : Function to Add Product
ROUTE : /add_product
*/
export const addNewProduct = async (req, res) => {
    try {
        
        const {productName , price , ramSize , stock , description, subCategory } =req.body;
        console.log(price , 'price');

        const images = req.files;

        console.log(images)

        let imagePaths = [];

        if(images){
            console.log('ivide');
            images.forEach((image) => {
                const imagePath = '/uploads/' + image.filename;
                imagePaths.push(imagePath);
            })
        

            let subCategoryExists = await subCategoryModel.findOne({_id : subCategory});

            if(!subCategoryExists){
                return res.status(404).json({error : 'No such subcategories'});
            }

            await productModel.create({
                productName,
                price,
                ramSize,
                stock,
                description,
                subCategory : subCategoryExists._id,
                images : imagePaths
            });

            return res.status(201).json({message : 'Product Added'});
        }    
        
    } catch (error) {
        console.log(error);
    }
}
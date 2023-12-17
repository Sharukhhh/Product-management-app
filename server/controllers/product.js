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

        const images = req.files;

        console.log(images)

        let imagePaths = [];

        if(images){
            console.log('ivide');
            images.forEach((image) => {
                const imagePath =  image.filename;
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



/*
DESCRIPTION : Function to Get Products
ROUTE : /products
*/
export const displayProducts = async (req, res) => {
    try {
        const products = await productModel.find().sort({createdAt : -1});

        if(!products){
            return res.status(404).json({error : 'Products not found'});
        }

        return res.json({message : 'Success' , products});

    } catch (error) {
        console.log(error);
    }
}



/*
DESCRIPTION : Function to Get details Single Product
ROUTE : /single/:productId
*/
export const getSingleProductDetails = async (req, res) => {
    try {
        const productId = req.params.productId;

        if(productId){

            const product = await productModel.findById(productId);

            if(!product){
                return res.status(404).json({error : 'Not product found'});
            }

            const productArray = [product];

            return res.json({message : 'success' , product : productArray});
        }
    } catch (error) {
        console.log(error);
    }
}
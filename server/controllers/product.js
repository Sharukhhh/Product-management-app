



/*
DESCRIPTION : Function to Add Product
ROUTE : /add_product
*/
export const addNewProduct = async (req, res) => {
    try {
        
        const {productName , price , ramSize , stock , description, subCategory } =req.body;
        
    } catch (error) {
        console.log(error);
    }
}
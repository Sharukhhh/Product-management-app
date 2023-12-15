import mongoose from 'mongoose';


//Schema for storing product details

const productSchema = mongoose.Schema({

    productName : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    specification : {
        type : String,
        required : true
    },

    stock : {
        type :Number,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    subCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'sub categories'
    },

    images : []

}, {timestamps : true});


const productModel = mongoose.model('products' , productSchema);

export default productModel;

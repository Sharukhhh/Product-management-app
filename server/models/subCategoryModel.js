import mongoose from 'mongoose';


// Schema for creating sub categories

const subCategorySchema = mongoose.Schema({

    mainCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },

    subcategoryName : {
        type : String,
        required : true
    },

    addedAt : {
        type : Date,
        default : Date.now
    }
});

const subCategoryModel = mongoose.model('sub categories' , subCategorySchema );

export default subCategoryModel;
import mongoose from 'mongoose';


const categorySchema = mongoose.Schema({

    categoryName : {
        type : String,
        required : true
    },

    addedAt : {
        type : Date,
        default : Date.now
    }
});

const categoryModel = mongoose.model('category' , categorySchema);

export default categoryModel;
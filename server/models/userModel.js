import mongoose from 'mongoose';

//Schema for creating user

const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true,
    }
});


const userModel = mongoose.model('users' , userSchema);

export default userModel;
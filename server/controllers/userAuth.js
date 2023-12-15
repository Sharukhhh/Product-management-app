import userModel from "../models/userModel.js";
import { createToken, hashingPassword } from "../helpers/helper.js";
import bcrypt from 'bcrypt';

/*
DESCRIPTION : User Registration
ROUTE : /register 
*/
export const registerUser = async (req, res) => {
    try {
        
        const {name , email , password} = req.body;

        if(name && email && password){

            const isExistingUser = await userModel.findOne({email});

            if(isExistingUser){
                return res.status(404).json({error : 'User Already Exists'});
            }

            const securedPassword = await hashingPassword(password);

            await userModel.create({
                name,
                email,
                password : securedPassword
            });

            return res.json({message : 'Account Created!'});
        }

    } catch (error) {
        console.log(error);
    }
}


/*
DESCRIPTION : User Sign in
ROUTE : /login
*/
export const login = async (req, res) => {
    try {
        const {email , password} = req.body;

        if(email && password){

            const user = await userModel.findOne({email});

            if(!user){
                return res.status(404).json({error : 'User not found'});
            }

            const isCorrectPassword = await bcrypt.compare(password , user.password);

            if(isCorrectPassword){

                const token = await createToken(user._id);

                return res.json({message : 'Logged In Successfully', user , token});

            } else {
                return res.status(401).json({error : 'Password Does not match!'});
            }
        }
    } catch (error) {
        console.log(error);
    }
}
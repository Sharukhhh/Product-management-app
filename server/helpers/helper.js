import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


// Helper function for hashing the password String
export const hashingPassword = async (password) => {

    const salt = bcrypt.genSalt(10);

    const hashedPassword = bcrypt.hash(password , salt);

    return hashedPassword;
}


export const createToken = async (userId) => {

    const token = await jwt.sign({userId : userId} , process.env.JWT_KEY , {expiresIn : '2hr'});

    return token;
}

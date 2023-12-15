import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongodbUri = process.env.MONGODB_URI;

export const connectToDatabase = async (req, res) => {
    try {
        await mongoose.connect(mongodbUri);
        console.log('connected to database')
        
    } catch (error) {
        console.error('Error while connecting to database' , error);
    }
}
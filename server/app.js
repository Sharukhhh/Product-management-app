import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import {dirname , join }   from 'path';
dotenv.config();
import morgan from 'morgan';
import { connectToDatabase } from './connections/database.js';
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));



app.use('/uploads', express.static(join(__dirname, 'uploads')))
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(morgan('dev'));

app.use('/api/auth' , authRoutes);
app.use('/api' , productRoutes);


// call to connect to databse
connectToDatabase();



const port  = process.env.PORTNUMBER || 4000;

app.listen(port , () => {
    console.log(`Server running successfully on http://localhost:${port}`);
})
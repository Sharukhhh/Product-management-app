import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import { connectToDatabase } from './connections/database.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';


const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.use(cors(corsOptions));



// app.use(express.static());
app.use(express.urlencoded({extended : true}));

app.use(morgan('dev'));

app.use('/auth' , authRoutes);


// call to connect to databse
connectToDatabase();



const port  = process.env.PORTNUMBER || 6000;

app.listen(port , () => {
    console.log(`Server running successfully on http://localhost:${port}`);
})
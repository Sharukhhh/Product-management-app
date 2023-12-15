import express from 'express';
import { login, registerUser } from '../controllers/userAuth.js';
const router = express.Router();



router.post('/register' , registerUser);

router.post('/login' , login);

export default router;
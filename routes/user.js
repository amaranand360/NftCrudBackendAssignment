import express from 'express';
import {
    logout,
    login,
    register,
} from '../controllers/user.js'


const router = express.Router();



router.post('/new',register);
router.post('/login',login);

router.get("/logout", logout);


export default router;
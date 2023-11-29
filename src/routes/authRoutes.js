import express from 'express';
import authRoutesControllers from '../../controllers/authRoutesController.js';
import postForm from '../models/Formulario.js';
import conn from '../config/conn.js';


const router = express.Router();

router.get('/login', authRoutesControllers.login);
router.post('/login', authRoutesControllers.postLogin);
router.get('/register', authRoutesControllers.register);
router.post('/register', authRoutesControllers.postRegister);
// router.post('/register', async (req, res) => {
//     const result = await postForm(req.body);
//     console.log(result);
// })


export default router;
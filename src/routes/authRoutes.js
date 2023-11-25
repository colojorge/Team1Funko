import express from 'express';
import authRoutesControllers from '../../controllers/authRoutesController.js';

const router = express.Router();

router.get('/login', authRoutesControllers.login);
router.post('/login', authRoutesControllers.postLogin);
router.get('/register', authRoutesControllers.register);
router.post('/register', authRoutesControllers.postRegister);

export default router;
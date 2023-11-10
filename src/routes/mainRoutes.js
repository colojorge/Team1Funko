import express from 'express';
import mainControllers from '../../controllers/mainController.js';

const router = express.Router();

router.get('/home', mainControllers.home) ;
router.get('/contact', mainControllers.contact) ;
router.get('/about', mainControllers.about);
router.get('/fags', mainControllers.fags);


export default router;
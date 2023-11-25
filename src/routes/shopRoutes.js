import express from 'express';
import shopControllers from '../../controllers/shopController.js';

const router = express.Router(); 

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.add);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.postCart);

export default router;


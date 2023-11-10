import express from 'express';
import adminRoutesControllers from '../../controllers/adminRoutesController.js';

const router = express.Router();

router.get('/', adminRoutesControllers.admin);
router.get('/create', adminRoutesControllers.create);
router.post('/create', adminRoutesControllers.postCreate);
router.get('/edit/:id', adminRoutesControllers.edit);
router.put('/edit/:id', adminRoutesControllers.putEdit);
router.delete('/delete', adminRoutesControllers.delete);


export default router;
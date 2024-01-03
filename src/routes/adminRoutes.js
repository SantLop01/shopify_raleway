const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');
const { uploadFiles } = require('../middlewares/uploadFiles');
const { isLogged } = require('../middlewares/login');

router.use(isLogged);

router.get('/', adminControllers.adminView);
router.get('/create', adminControllers.createView)
router.post('/create', uploadFiles.fields([{name: 'image1'}, {name: 'image2'}]), adminControllers.createItem);
router.get('/create-category', adminControllers.createCategoryView)
router.post('/create-category', adminControllers.createCategory);
router.get('/edit/:id', adminControllers.editView)

router.put('/edit/:id', uploadFiles.fields([{name: 'image1'}, {name: 'image2'}]), adminControllers.editItem);

router.delete('/delete/:id', adminControllers.deleteItem);

module.exports = router;
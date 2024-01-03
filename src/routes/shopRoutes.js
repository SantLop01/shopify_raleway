const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/', shopControllers.shopView);
router.post('/search', shopControllers.search);
router.get('/item/:id', shopControllers.detailView);
router.post('/item/:id/add', (req, res) => res.send('Controladores para shop'))
router.get('/checkout', shopControllers.checkoutView)
router.post('/cart', (req, res) => res.send('Controladores para shop'))

module.exports = router;
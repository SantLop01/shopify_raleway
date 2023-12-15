const express = require('express')
const router = express.Router();

router.get('/', 'Controladores para shop')
router.get('/item/:id', 'Controladores para shop')
router.post('/item/:id/add', 'Controladores para shop')
router.get('/cart', 'Controladores para la vista')
router.post('/cart', 'Controladores para enviar item al carrito')

module.exports = router;
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.send('Controladores para shop'))
router.get('/item/:id', (req, res) => res.send('Controladores para shop'))
router.post('/item/:id/add', (req, res) => res.send('Controladores para shop'))
router.get('/cart', (req, res) => res.send('Controladores para shop'))
router.post('/cart', (req, res) => res.send('Controladores para shop'))

module.exports = router;
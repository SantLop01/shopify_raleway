const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers')

router.get('/home', shopControllers.shopView);
router.get('/contact', (req, res) => res.send('Controladores para shop'));
router.get('/about', (req, res) => res.send('Controladores para shop'));

module.exports = router;
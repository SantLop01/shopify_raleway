const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => res.send('Controladores para shop'))
router.get('/contact', (req, res) => res.send('Controladores para shop'))
router.get('/about', (req, res) => res.send('Controladores para shop'))

module.exports = router;
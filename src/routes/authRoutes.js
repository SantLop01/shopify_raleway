const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send('Controladores para shop'))
router.post('/login', (req, res) => res.send('Controladores para shop'))
router.get('/register', (req, res) => res.send('Controladores para shop'))
router.post('/register', (req, res) => res.send('Controladores para shop'))
router.get('/logout', (req, res) => res.send('Controladores para shop'))

module.exports = router;
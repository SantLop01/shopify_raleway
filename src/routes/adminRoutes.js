const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Controladores para shop'))
router.get('/create', (req, res) => res.send('Controladores para shop'))
router.post('/create', (req, res) => res.send('Controladores para shop'))
router.get('/edit/:id', (req, res) => res.send('Controladores para shop'))
router.put('/edit/:id', (req, res) => res.send('Controladores para shop'))
router.delete('/delete/:id', (req, res) => res.send('Controladores para shop'))

module.exports = router;
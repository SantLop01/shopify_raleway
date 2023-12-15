const express = require('express');
const router = express.Router();

router.get('/login', 'Controlador para la vista de login')
router.post('/login', 'Controlador para enviar los datos')
router.get('/register', 'Controlador para la vista de login')
router.post('/register', 'Controlador para enviar los datos')
router.get('/logout', 'Controlador para desloguearse (ni se cómo funciona)')

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', 'Controlladores para admin')
router.get('/create', 'Controlladores para la view')
router.post('/create', 'Controlladores para el enviar el formulario')
router.get('/edit/:id', 'Controlador para la view editar')
router.put('/edit/:id', 'Controlador para editar')
router.delete('/delete/:id', 'Controlador para borrar')

module.exports = router;
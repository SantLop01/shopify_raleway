const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const { body } = require('express-validator');
const { validateInputLogin } = require('../middlewares/validator');

const loginValidation = [
    body('email') 
      .isEmail()
      .withMessage('Ingresa un correo valido'),
    body('password')
      .isLength({ min: 6 })
      .isAlphanumeric()
      .withMessage('Ingresa una contraseña valida')
]

router.get('/login', authControllers.loginView);
router.post('/login', loginValidation, validateInputLogin, authControllers.loginUser);
router.get('/register', authControllers.registerView);
router.post('/register', authControllers.registerUser);
router.get('/logout', authControllers.logoutUser);

module.exports = router;
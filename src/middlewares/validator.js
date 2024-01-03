const { validationResult } = require('express-validator');

const validateInputLogin = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400);
    }
    next();
}

module.exports = {
    validateInputLogin
}
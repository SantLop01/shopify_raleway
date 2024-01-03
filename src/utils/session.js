const session = require('express-session');
require('dotenv').config();

function initSession() {
    return session({
        secret: process.env.SECRETPASS,
        resave: false,
        saveUninitialized: false
    });
}

module.exports = {
    initSession
}
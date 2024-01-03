const session = require('cookie-session');
require('dotenv').config();

function initSession() {
    return session({
        secret: process.env.SECRETPASS,
    });
}

module.exports = {
    initSession
}
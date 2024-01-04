const cloudinary = require('cloudinary');
require('dotenv').config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.APIKEY,
    api_secret: process.env.APISECRET,
    secure: process.env.SECURE,
});

module.exports = { 
    cloudinary
};

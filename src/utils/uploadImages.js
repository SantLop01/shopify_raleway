const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: 'donbqc0op',
    api_key: '663615938499747',
    api_secret: 'dLubQn6mpzhq-yoE0UZvHFjhdGk',
    secure: true,
});

module.exports = { 
    cloudinary
};

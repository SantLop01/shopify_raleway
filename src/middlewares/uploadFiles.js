const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({});

const uploadFiles = multer({storage});

module.exports = {
    uploadFiles
};
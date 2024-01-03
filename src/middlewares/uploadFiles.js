const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, `${__dirname}../../../public/img`),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const uploadFiles = multer({storage});

// const pathImg = `${__dirname}../../../public/img`;

// const uploadFiles = multer({
//     storage: multer.memoryStorage(),
//     onFileUploadStart: function(file) {
//         sharp(file.path)
//           .webp()
//           .toFile(pathImg)
//           .then(() => {
//             console.log('Convertido a webp')
//           })
//     }
// });

module.exports = {
    uploadFiles
};
// import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "./public/temp")
//     },
//     filename: function(req, file, cb){
//         // const uniqueSuffix = Date.now() + '-' + Math.round
//         // (Math.random()* 1E9)
//         // cb--> CALLBACK    
//         cb(null, file.fieldname +'-'+ uniqueSuffix)
//     }
// })

// export const upload = multer({
//     storage,
// })

const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

module.exports = multer({ storage: storage });


// // const express = require('express');
// const multer = require('multer');
// const path = require('path');

// // const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   // Save file to your desired location
//   const filePath = path.join(__dirname, 'uploads', req.file.filename);
//   // Here you can perform additional operations, like saving file metadata to the database

//   res.send({ message: 'File uploaded successfully', filePath });
// });

// // app.listen(3001, () => {
// //   console.log('Server is running on port 3001');
// // });


// const path = require('path');
// const File = require('../models/File');

// exports.uploadFile = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
// }

//   try {

//     csvProcessor.processCSV(req.file.path)
//         .then(results => {
//             console.log(results);
//             res.send('CSV file processed successfully.');
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send('Error processing CSV file.');
//         });

//     const fileData = {
//       originalName: req.file.originalname,
//       fileName: req.file.filename,
//       path: path.join(__dirname, '..', 'uploads', req.file.originalname),
//       size: req.file.size,
//       mimetype: req.file.mimetype,
//     };

//     const file = new File(fileData);
//     await file.save();

//     res.send({ message: 'File uploaded successfully on the server', file });
//   } catch (error) {

//     res.status(500).send({ error: 'Error in Uploading  file on the server' });
//   }
// };

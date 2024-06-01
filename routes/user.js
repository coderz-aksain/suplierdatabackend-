const express = require("express");
const multer = require('multer');
const csvProcessor = require('../utils/csvProcessor');
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const { uploadFile } = require('../controller/uploadfile');
const FileModel = require('../models/File'); // Import your Mongoose model for file storage
const { signup, login } = require('../controller/Auth');
const { UpdateUser } = require("../controller/UpdateUser.js");
const {deleteUser} = require("../controller/deleteUser.js");
const upload = multer({ dest: 'uploads/' });

router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.post('/login', login);
router.put("/updateuser/:id", UpdateUser);
router.delete("/deleteUser/:id",deleteUser);
router.post('/upload', upload.single('csvfile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        // Delete previous collection data
        await FileModel.deleteMany({});

        const results = await csvProcessor.processCSV(req.file.path);

        // Save file info to the database
        const fileData = {
            filename: req.file.originalname,
            path: req.file.path, // You may want to store the file path instead of the actual file
            // Any other metadata you want to store
        };

        // Save new data from the uploaded file
        for (let i = 0; i < results.length; i++) {
            console.log(results[i]["Supplier name"])
            await FileModel.create({ suppliername: results[i]["Supplier name"], paymentterm: results[i]["Payment terms"] });
        }

        console.log("result", results);
        res.send('CSV file processed successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error processing CSV file.');
    }
});

module.exports = router;

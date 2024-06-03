// const User = require("../models/File");
// import File from "../models/File";
// const File=require('../models/File')
// exports.getUser = async (req, res) => {
// 	try {
// 		const  userData2 = File.count({paymentterms})
// 		const userData = await File.find({});
// 		res.json({ success: true, data: userData,userData2 });
// 	} catch (error) {
// 		res.status(500).json({ success: false, error: error });
// 	}
// };


const File = require('../models/File');

exports.getUser = async (req, res) => {
	try {
		// Count the number of documents with paymentterms equal to 'paymentterm90'
		// const userData2 = await File.find.count({ paymentterm: 'Net 90' });
		const userData2 = await File.countDocuments({ paymentterm: 'Net 90' });

		console.log(userData2);
		// Retrieve all documents from the collection
		const userData = await File.find({});
		// console.log(userData);
		// Send the response with the retrieved documents and the count
		res.json({ success: true, data: userData, count: userData2 });
		
	} catch (error) {
		// Handle any errors that occurred during the process
		res.status(500).json({ success: false, error: error.message });
	}
};

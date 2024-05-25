// const User = require("../models/File");
// import File from "../models/File";
const File=require('../models/File')
exports.getUser = async (req, res) => {
	try {
		const userData = await File.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};

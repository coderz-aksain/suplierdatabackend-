const File = require('../models/File');

exports.getUser = async (req, res) => {
	try {
		// Aggregate documents to count the number of each unique payment term
		const paymentTermCounts = await File.aggregate([
			{
				$group: {
					_id: "$paymentterm",
					count: { $sum: 1 }
				}
			},
			{
				$sort: { count: -1 }
			},
			{
				$limit: 2
			}
		]);
		console.log(paymentTermCounts);

		// Retrieve all documents from the collection
		const userData = await File.find({});

		// Prepare the response data
		const responseData = {
			success: true,
			data: userData,
			topPaymentTerm: paymentTermCounts.length > 0 ? paymentTermCounts[0] : null
		};
		

		// Send the response with the retrieved documents and the top payment term count
		res.json(responseData);
		

	} catch (error) {
		// Handle any errors that occurred during the process
		res.status(500).json({ success: false, error: error.message });
	}
};

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalName: String,
  fileName: String,
  path: String,
  size: Number,
  mimetype: String,
  supplierData:Object,
  suppliername:String,
  paymentterm:String,
  // fileData:Object,
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);

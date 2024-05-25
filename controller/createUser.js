const File = require("../models/File");

exports.createUser = async (req, res) => {
  try {
// const data=await File.remove({})

    console.log("req body", req.body);
    const { supplierName, paymentTerms  } = req.body;
    if (!supplierName || !paymentTerms ) {
      console.log("Not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await File.create({
      suppliername:supplierName,
      paymentterm:paymentTerms,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${supplierName}`,
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};



// // ===============================================================
// const express = require("express");
// const router = express.Router();
// const Supplier = require('../models/Supplier');

// router.post('/createSupplier', async (req, res) => {
//     const { name, paymentTerms } = req.body;

//     if (!name || !paymentTerms) {
//         return res.status(400).send('Name and Payment Terms are required.');
//     }

//     try {
//         const supplier = new Supplier({ name, paymentTerms });
//         const savedSupplier = await supplier.save();
//         res.status(201).send(savedSupplier);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error creating supplier.');
//     }
// });

// module.exports = router;

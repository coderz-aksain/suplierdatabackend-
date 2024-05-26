const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//=================== Signup route Handler===================

// exports.signup = async (req, res) => {
//     try {
//         // get the data
//         const { name, email, password, role } = req.body;
//         // check if user already exists
//         const existingUser = await User.findOne({ email });

//         // IF THERE IS AN EXISTING USER WITH THIS ID THEN RETURN THE RESPONSE
//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'User already Exists',
//             });
//         }

//         // ==============SECURE PASSWORD==================
//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         } catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error in hashing password'
//             });
//         }

//         // create entry for User (created an entry in the Database)
//         const user = await User.create({
//             name, email, password: hashedPassword, role
//         });

//         return res.status(200).json({
//             success: true,
//             message: 'User Created Successfully',
//             name: name,
//             role: role
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             success: false,
//             message: "User cannot be registered, please try again later"
//         });
//     }
// };

// ==================Login Route handler====================
// const User = require("../models/User");
// exports.login = async (req, res) => {
//     try {
//         // Fetch Data
//         const { email, password } = req.body;
        
//         // Check if email and password are provided
//         if (!email || !password) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Please fill all the details'
//             });
//         }

//         // Specific credentials check
//         const predefinedEmail = "supplierdata@gmail.com";
//         const predefinedPassword = "supplierdata";

//         // Check for specific email and password
//         if (email !== predefinedEmail || password !== predefinedPassword) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Invalid credentials"
//             });
//         }

//         // The exact data you want to use in the JWT token
//         const payload = {
//             email: predefinedEmail,
//             role: "admin" // Add the appropriate role if needed
//         };

//         // Generate JWT token           ${process.env.JWT_SECRET_KEY}
//         const token = jwt.sign(payload, process.env.JWT_SECRET, {
//             expiresIn: "7d",
//         });
//         // console.log("Your token is this", token)
        
//         // save in local storage
//         // localStorage.setItem("token",token);
//         // console.log("token ",token);
    
//         const options = {
//             expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 3000),
//             httpOnly: true,
//         };

//         // Send token in response
//         res.cookie("token", token, options).status(200).json({
//             success: true,
//             token,
//             user: {
//                 email: predefinedEmail,
//                 role: "someRole" // Add the appropriate role if needed
//             },
//             message: 'User Logged in successfully'
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: "Login failed, please try again later"
//         });
//     }
// };


// require('dotenv').config(); // Add this line to load .env variables

// const jwt = require('jsonwebtoken'); // Ensure you have this line to import the jwt package

exports.login = async (req, res) => {
    try {
        // Fetch Data
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all the details'
            });
        }

        // Specific credentials check
        const predefinedEmail = "supplierdata@gmail.com";
        const predefinedPassword = "supplierdata";

        // Check for specific email and password
        if (email !== predefinedEmail || password !== predefinedPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // The exact data you want to use in the JWT token
        const payload = {
            email: predefinedEmail,
            role: "admin" // Add the appropriate role if needed
        };

        // Generate JWT token
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        const options = {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // corrected millisecond value
            httpOnly: true,
        };

        // Send token in response
        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user: {
                email: predefinedEmail,
                role: "someRole" // Add the appropriate role if needed
            },
            message: 'User Logged in successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login failed, please try again later"
        });
    }
};

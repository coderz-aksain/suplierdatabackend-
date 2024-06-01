const mongoose = require('mongoose');
require("dotenv").config;

const connectWithDb = () =>{

    mongoose.connect("mongodb+srv://ayushnikhil2002:ayush@cluster0.mcrdeo7.mongodb.net/supplierDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log("DB conenction is successfull"))
    .catch((error)=>{
        console.log("Issue in DB connection")
        console.error(error.message);
        process.exit(1)
    });

}

module.exports  = connectWithDb;
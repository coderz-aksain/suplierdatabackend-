// import the model of TODO
const File = require("../models/File");

// define  route handler

exports.deleteUser = async(req, res) =>{
try{
    // extract title and description from request body
    const {id} = req.params;
    console.log("Your id is", id);
    // Delete the TODO from DB using function findByIdAndDelete
     await  File.findByIdAndDelete(id);
    // send a json response with a successfull flag
    res.status(200).json(
        {
            success:true,
            message:'Supplier Deleted successfully'
        }
    );
}
catch(error){
    console.error(error);
    console.log(error);
    res.status(500).json({success:false, data:"internal server error", message:err.message})

}
}
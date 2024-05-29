// // import the model

// const File  = require("../models/File")


// exports.UpdateUser = async(req, res) =>{
     
//     try{
//         // ======1st way========
//             // const id = req.params.id 
//         //  ====== 2nd way (destructuing)=====
//             const {id} = req.params;
//             const {suppliername, paymentterm} = req.body;

//             const todo = await File.findByIdAndUpdate(
//                 {_id:id},
//                 {suppliername, paymentterm, updatedAt:Date.now()},

//             )
//             res.status(200).json({
//                 success:true,
//                 suppliername:suppliername,
//                 paymentterm:paymentterm,
//                 data:todo,
//                 message:"Updated Successfully"
//             })
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({
            
//             success:false,
//             message:"Internal Server Error"
//         })
        
//     }
// }

const File = require("../models/File");

exports.UpdateUser = async (req, res) => {
    try {
        // Destructure the id from req.params
        const {id}  = req.params;
        console.log("Id is: ", id)
        const { suppliername, paymentterm } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "ID parameter is missing"
            });
        }
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     return res.status(400).send({ error: 'Invalid ID format' });
        //   }

        // Update the document
        const todo = await File.findByIdAndUpdate(
            id,
            { suppliername, paymentterm, updatedAt: Date.now() },
            { new: true } // This option returns the updated document
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Document not found"
            });
        }

        res.status(200).json({
            success: true,
            suppliername,
            paymentterm,
            data: todo,
            message: "Updated Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

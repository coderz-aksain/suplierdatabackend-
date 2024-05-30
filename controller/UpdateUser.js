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
    // console.log(req.body)
    try {
        // Destructure the id from req.params
        const {id}  = req.params;
        console.log("Id is: ", id)
        const { supplierName, paymentTerms } = req.body;


 console.log(supplierName,paymentTerms)

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
           {_id:id},
            { suppliername:supplierName, paymentterm:paymentTerms }
           // This option returns the updated document
        );
        await todo.save()

console.log("todo",todo)
        if (!todo) {
            return res.status(404).json({

                success: false,
                message: "Document not found"
            });
        }

        res.status(200).json({
            success: true,
          
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

const mongoose = require('mongoose');
const Institution = require('../model/institutionSchema')

// Create Institution
const createinstitution = async (req, res) => {
    try {
        const { id, name,  address, website, email, phone, contactPerson, status } = req.body;
        // const userId = req.user.id
       

        console.log(id,name,address,website,email,phone,contactPerson,status);
       
        
        if (!req.file) {
            console.log("file Error");
            
            return res.status(400).json({ error: "Logo file is required!" });
           
        }
        
        const logo =  req.file.path 
       console.log("logo",logo);
       

        if (!id ||!name ||!logo || !address || !website || !email || !phone || !contactPerson) {

     return res.status(400).json({ error: "All fields are required" });
        }
        const owner = (req.user._id);
console.log("owner",owner);

        const newInstitution = new Institution({

            id ,name, logo, address, website, email, phone, contactPerson, status,owner

        });
                 
 
        await newInstitution.save();
        res.status(201).json({ message: "Institution created successfully", institution: newInstitution });
        console.log( "new",newInstitution);
        
    } catch (error) {
        console.error("Error creating institution:", error);

        res.status(500).json({ error: error.message });
    }
};


const viewInstitution = async (req, res) => {
    const userID = req.user._id
   
    
    try {
        const institutions = await Institution.findOne({owner:userID});
        res.status(200).json({institution:institutions,userId:userID});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateInstitution = async (req, res) => {
    try {

     
        console.log("Params:", req.params); // ✅ Log params
        console.log("Body:", req.body); // ✅ Log body
        console.log("File:", req.file);
        
        const institutionId = req.params.id;
        console.log("backend",institutionId);
        
        const { id, name, address, website, email, phone, contactPerson, status } = req.body;
        console.log(id,name,address);
        
        const logo = req.file ? req.file.path : null;

        const updatedData = {id, name, address, website, email, phone, contactPerson, status };
        if (logo) updatedData.logo = logo; // Update logo only if a new file is uploaded
console.log("updateddata",updatedData);

const updatedInstitution = await Institution.findByIdAndUpdate(
    institutionId,
    { $set: updatedData }, // Using `$set` ensures only these fields are modified
    { new: true } // Returns the updated document
)

        console.log("updatedprofile",updatedInstitution);
        

        if (!updatedInstitution) {
            return res.status(404).json({ message: "Institution not found" });
        }

        res.status(200).json({ message: "Institution updated successfully", institution: updatedInstitution });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports ={
    createinstitution,
    viewInstitution,
    updateInstitution
}

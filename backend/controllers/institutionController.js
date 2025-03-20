const Institution = require('../model/institutionSchema')

// Create Institution
const createinstitution = async (req, res) => {
    try {
        const { name,  address, website, email, phone, contactPerson, status } = req.body;
        const userID = req.headers.userID

        console.log(userID);
       
        
        if (!req.file) {
            console.log("file Error");
            
            return res.status(400).json({ error: "Logo file is required!" });
           
        }
        
        const logo =  req.file.path 
       

        if (!name ||!logo || !address || !website || !email || !phone || !contactPerson || !userID) {
            console.log("fille Error");
            return res.status(400).json({ error: "All fields are required" });
        }

        const newInstitution = new Institution({
            name, logo, address, website, email, phone, contactPerson, status,userID
        });
 console.log(newInstitution);
 
        await newInstitution.save();
        res.status(201).json({ message: "Institution created successfully", institution: newInstitution });
        console.log(newInstitution);
        
    } catch (error) {
        console.error("Error creating institution:", error);

        res.status(500).json({ error: error.message });
    }
};


const viewInstitution = async (req, res) => {
    const userID = req.headers.userID
    try {
        const institutions = await Institution.find({userId:userID});
        res.status(200).json(institutions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const updateInstitution = async (req, res) => {
    try {
        const id = req.bod;
        const {  name, address, website, email, phone, contactPerson, status } = req.body;
        const logo = req.file ? req.file.path : null;

        const updatedData = { name, address, website, email, phone, contactPerson, status };
        if (logo) updatedData.logo = logo; // Update logo only if a new file is uploaded

        const updatedInstitution = await Institution.findByIdAndUpdate(id, updatedData, { new: true });

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

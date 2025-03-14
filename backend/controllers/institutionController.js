const Institution = require('../model/institution')

// Create Institution
const createinstitution = async (req, res) => {
    try {
        const { name, address, website, email, phone, contactPerson, status } = req.body;
        const logo = req.file ? req.file.path : null; 

        const newInstitution = new Institution({
            name, logo, address, website, email, phone, contactPerson, status
        });

        await newInstitution.save();
        res.status(201).json({ message: "Institution created successfully", institution: newInstitution });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const viewInstitution = async (req, res) => {
    try {
        const institutions = await Institution.find();
        res.status(200).json(institutions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateInstitution = async (req, res) => {
    try {
        const id = req.params.id;
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

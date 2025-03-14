const mongoose = require('mongoose');

const InstitutionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String }, // Store file path or URL
    address: { type: String, required: true },
    website: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    contactPerson: { type: String, required: true },
    status: { type: String, enum: ['Approved', 'Blocked'], default: 'Approved' }
}, { timestamps: true });

module.exports = mongoose.model('Institution', InstitutionSchema);
const mongoose = require('mongoose');


const InstitutionSchema = new mongoose.Schema({
   id:{type:String,required:true},
    name: { type: String, required: true },
    logo: { type: String , required:true}, // Store file path or URL
    address: { type: String, required: true },
    website: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    contactPerson: { type: String, required: true },
    status: { type: String, enum: ['pending','approved', 'blocked'], default: 'pending' },
    owner:{type:mongoose.Schema.Types.ObjectId ,ref:"auth",require:true}
}, { timestamps: true });

module.exports = mongoose.model('Institution', InstitutionSchema);
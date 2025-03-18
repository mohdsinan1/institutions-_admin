const { default: mongoose } = require("mongoose");
const institution = require("./institutionSchema");

const authSchema = new mongoose.Schema({
    name : {type:String,required:true},
    email:{type:String ,required:true},
    password:{type:String,required:true},
   

    
 

})

module.exports = mongoose.model("auths",authSchema)
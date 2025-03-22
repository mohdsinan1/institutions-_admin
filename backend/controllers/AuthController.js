const auth = require("../model/authSchema");
const generateToken =require('../utils/generateToken');
const bcrypt = require('bcrypt')
const institution = require('../model/institutionSchema')
const mongoose= require('mongoose')

const register = async (req, res) => {
  const {name,email,password} = req.body
  console.log(name,email,password);
  
  if(!name||!email||!password){
   return res.status(400).json({massage:"fullfile the form"})
  }
  try {

    let user = await auth.findOne({email})

    if(user) return res.status(400).json({message:"user already exsisted"})
    
      const hasedpassword = await bcrypt.hash(password,10)
const newUser = new auth({
  name,
  email,
  password:hasedpassword
})
      await newUser.save();

    console.log(newUser._id);

    res.status(201).json(
       {massage:"created succsessfuly",token:generateToken(newUser._id),
        user:newUser})
  } catch (error) {

    console.log("error", error);
    res.status(500).json({message:"internal error"})
  }
};






const Login = async (req, res) => {
  try {
    const { email ,password } = req.body;
// const userId = req.user.id

console.log(email,password);

// const profile = await inatitution.find({userId})

    if (!email||!password) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await auth.findOne({ email });

   console.log("id",user._id);
   
    
    if (!user) {
      console.log("not",user);
      
      return res.status(404).json({ message: "User not found please sign up" });
    }
    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", user.password);

   const maching = await  bcrypt.compare(password,user.password);

if(!maching) return res.status(400).json({ message: "Invalid credentials" })

  
const token = generateToken(user._id)
console.log("authtttt",token);

    res.status(201).json({masssage:"finded ",token:token,

      user:user});

      
      

  } catch (error) {

    console.log("error", error);

    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  Login,
  
};

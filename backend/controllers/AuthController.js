const auth = require("../model/authSchema");
const generateToken =require('../utils/generateToken');
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  const {name,email,password} = req.body
  if(!name||!email||!password){
    res.status(400).json({massage:"fullfile the form"})
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

    console.log(newUser);

    res.status(201).json( {massage:"created succsessfuly",toke:generateToken(newUser._id),user})
  } catch (error) {
    console.log("error", error);
    res.status(500).json({message:"internal error"})
  }
};
const Login = async (req, res) => {
  try {
    const { email ,password } = req.body;

    if (!email||!password) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await auth.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found please sign up" });
    }
   const maching =  bcrypt.compare(password,user.password);
if(!maching) return res.status(400).json({ message: "Invalid credentials" })

    res.status(201).json({masssage:"finded ",token:generateToken(user._id),user});
  } catch (error) {
    console.log("error", error);

    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  Login,
  
};

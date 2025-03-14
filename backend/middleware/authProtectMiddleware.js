const jwt = require('jsonwebtoken')
require("dotenv").config()
const protect =(req,res,next) =>{

const token = req.header.authorization
if (!token||!token.startseith("Bearer")) return res.states(400).json({message:"invalide "})

try {
    token =token.split(" ")[1]

    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)

    req.user = decoded
      next()

} catch (error) {
    res.states(400).json({message:"invalid token"})
}


}

module.exports= protect;
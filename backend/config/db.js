<<<<<<< HEAD
const mongoose = require ('mongoose')
const dotenv = require('dotenv').config()
const URI = process.env.DATABASE_URL;


const ConnecteDB = async () => {
    try {
        const conn = await mongoose.connect(URI)
        console.log(`mongodb connected: ${conn.connection.host}`);
        
         
        
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
        
        
=======

const mongoose = require("mongoose")
const dotenv = require('dotenv')
const URI = process.env.CONNECTION_STRING


const connectDB = async ()=>{
    try {
    const conn  =  await mongoose.connect(URI)

console.log(`mongodbconnection successfully${conn.connection.host}`);


    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
>>>>>>> 52a54c41eb3d96128fbad67f8dc1586866b943e2
    }
}
mongoose.connection.on('error' , (error) => console.log(` error in mongodb connection` , error))

<<<<<<< HEAD
module.exports = ConnecteDB
=======
module.exports = connectDB;
>>>>>>> 52a54c41eb3d96128fbad67f8dc1586866b943e2

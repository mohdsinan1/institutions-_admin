
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
    }
}

module.exports = connectDB;

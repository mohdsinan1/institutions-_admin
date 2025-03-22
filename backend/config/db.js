const mongoose = require ('mongoose')
 require('dotenv').config()
const URI = process.env.DATABASE_URL;


const ConnecteDB = async () => {
    try {
        const conn = await mongoose.connect(URI)
        console.log(`mongodb connected: ${conn.connection.host}`);
        
         
        
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1);
        
        
    }
}
mongoose.connection.on('error' , (error) => console.log(` error in mongodb connection` , error))

module.exports = ConnecteDB

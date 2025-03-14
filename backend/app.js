
const express = require ("express")
const dotenv = require('dotenv').config()
 const port = process.env.PORT || 3001
 const route =require('./routes/route')
const cors = require('cors')
const institutionRouter = require ('../backend/routes/institutionRouter')
const ConnecteDB = require("./config/db")
 const app = express();

 app.use(express.json())

 app.use(cors())

 ConnecteDB()

app.get('/',route)
app.use('/uploads', express.static('uploads')); // Serve uploaded images
app.use('/institution', institutionRouter);
 

 app.use('/api', route);




 app.listen(port, ()=>{
    console.log(`server is runing at http://localhost:${port}`)
    
 })
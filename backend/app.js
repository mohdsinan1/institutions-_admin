
const express = require('express');
const dotenv = require('dotenv').config()
 const port = process.env.PORT || 3001
 const route =require('./routes/route')
const cors = require('cors')
 const app = express();

 app.use(express.json())

 app.use(cors())

app.get('/',route)



 app.listen(port, ()=>{
    console.log(`server is runing at http://localhost:${port}`)
    
 })
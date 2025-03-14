
const express = require('express');
const dotenv = require('dotenv').config()
 const port = process.env.PORT || 3001
 const route =require('./routes/route')
const cors = require('cors');
const connectdb = require('./config/db');
const routes = require('./routes/route');
 const app = express();

 app.use(express.json())

 app.use(cors())

 connectdb()

 app.use('/api', route);
 app.use('/voucher',require('./routes/voucherRoute'))




 app.listen(port, ()=>{
    console.log(`server is runing at http://localhost:${port}`)
    
 })
const express = require("express");
const dotenv = require("dotenv").config();

const express = require('express');

 const port = process.env.PORT || 3001
 const route =require('./routes/route')
const cors = require('cors');
const connectdb = require('./config/db');
 const app = express();

app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 7200;
connectdb();

app.use("/auth", route);


 app.use('/api', route);


app.use("/institution",)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

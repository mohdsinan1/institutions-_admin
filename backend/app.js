
const path= require("path")
const express = require ("express")
 require('dotenv').config()
 
 const route =require('./routes/route')
const cors = require('cors')
const institutionRouter = require ('../backend/routes/institutionRouter')
const ConnecteDB = require("./config/db")
 const app = express();

app.use(express.json());
ConnecteDB()



app.use(cors());

app.use(express.urlencoded({ extended: true }))
app.use("/auth", route);


app.use('/uploads',  express.static(path.join(__dirname, "uploads"))); // Serve uploaded images
app.use('/institution', institutionRouter);
 

const PORT = process.env.PORT || 7200;




app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

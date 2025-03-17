

const express = require ("express")
const dotenv = require('dotenv').config()
 const port = process.env.PORT || 3001
 const route =require('./routes/route')
const cors = require('cors')
const institutionRouter = require ('../backend/routes/institutionRouter')
const ConnecteDB = require("./config/db")
 const app = express();

app.use(express.json());
ConnecteDB()



app.use(cors());
app.use("/auth", route);


app.use('/uploads', express.static('uploads')); // Serve uploaded images
app.use('/institution', institutionRouter);
 

const PORT = process.env.PORT || 7200;




app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

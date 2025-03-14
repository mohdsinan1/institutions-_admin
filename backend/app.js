

const express = require ("express")
const dotenv = require('dotenv').config()
 const port = process.env.PORT || 3001
 const route =require('./routes/route')
const cors = require('cors')
const institutionRouter = require ('../backend/routes/institutionRouter')
const ConnecteDB = require("./config/db")
 const app = express();

app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 7200;
connectdb();

app.use("/auth", route);

 ConnecteDB()

app.get('/',route)
app.use('/uploads', express.static('uploads')); // Serve uploaded images
app.use('/institution', institutionRouter);
 

 app.use('/api', route);




app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

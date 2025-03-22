
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


// app.use("/auth", route);

// app.get("/", route);
// app.use("/uploads", express.static("uploads")); // Serve uploaded images
// app.use("/institution", require('./routes/institutionRouter'));

// app.use("/api", route);
app.use("/voucher", require("./routes/voucherRoute"));
app.use('/courses',require('./routes/courseRoute'))
app.use('/student',require('./routes/studentRoute'))
const PORT = process.env.PORT || 7200;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);



app.use('/uploads', express.static('uploads')); // Serve uploaded images
// app.use('/institution', institutionRouter);
 






// app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));




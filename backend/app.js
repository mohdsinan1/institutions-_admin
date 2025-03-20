const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3001;
const route = require("./routes/route");
const cors = require("cors");
const connectDB =require('./config/db')
// const routes = require("./routes/route");
const app = express();

app.use(express.json());


connectDB()

app.use(cors());



// app.use("/auth", route);

app.get("/", route);
// app.use("/uploads", express.static("uploads")); // Serve uploaded images
app.use("/institution", require('./routes/institutionRouter'));

// app.use("/api", route);
app.use("/voucher", require("./routes/voucherRoute"));
app.use('/courses',require('./routes/courseRoute'))
app.use('/student',require('./routes/studentRoute'))

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
);



app.use('/uploads', express.static('uploads')); // Serve uploaded images
// app.use('/institution', institutionRouter);
 

// const PORT = process.env.PORT || 7200;




// app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));




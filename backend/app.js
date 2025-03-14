const express = require("express");
const dotenv = require("dotenv").config();

const route = require("./routes/route");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
//  const port = process.env.PORT || 3003

app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 7200;
connectDB();

app.use("/auth", route);

app.use("/institution",)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define a Schema & Model
const CompanySchema = new mongoose.Schema({
  id: String,
  name: String,
  logo: String,
  address: String,
  website: String,
  email: String,
  phone: String,
  contactPerson: String,
  status: { type: String, default: "Approved" },
});

const Company = mongoose.model("Company", CompanySchema);

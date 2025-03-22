
const express = require("express");
// const authController = require("../controllers/AuthController");
const studentController = require("../controllers/student");
// const router = require("./voucherRoute");

const router =express.Router()




router.post('/create-student',studentController.createStudent )
router.get('/students',studentController.getAllStudents)

module.exports =router

const express = require("express");
const authController = require("../controllers/AuthController");
const studentController = require("../controllers/student");

const routes =express.Router()



routes.post('/signup',authController.register)
routes.post('/login',authController.Login)
routes.post('/createstudent',studentController.createStudent )
routes.get('/students',studentController.getAllStudents)






module.exports = routes;
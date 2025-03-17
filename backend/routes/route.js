const express = require("express");
const controller = require("../controllers/AuthController");
const controllers = require("../controllers/student");

const routes =express.Router()



routes.post('/signup',controller.register)
routes.post('/login',controller.Login)
routes.post('/createstudent',controllers.createStudent )
routes.get('/students',controllers.getAllStudents)






module.exports = routes;
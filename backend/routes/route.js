const express = require("express");
const controller = require("../controllers/student");

const routes =express.Router()


routes.post('/createstudent',controller.createStudent )
routes.get('/students',controller.getAllStudents)






module.exports = routes;
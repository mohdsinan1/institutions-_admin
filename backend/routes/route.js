const express = require("express");
const controller = require("../controllers/AuthController");

const routes =express.Router()



routes.post('/signup',controller.register)
routes.post('/login',controller.Login)






module.exports = routes;
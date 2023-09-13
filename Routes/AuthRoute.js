const express = require("express");
const { registerController, loginController, currentUserController } = require("../Controllers/AuthController");
const authMiddlewares = require("../middlewares/authMiddlewares");
const route = express.Router();

//routes
//Register || Post
route.post('/register',registerController)

//Login || Post
route.post('/login',loginController)

//get current user 
route.get('/current-user',authMiddlewares, currentUserController)

module.exports = route;
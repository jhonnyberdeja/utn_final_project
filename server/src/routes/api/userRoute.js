const express = require("express");

const route = express.Router();

const {getAllUsers, getUser} = require("../../controllers/userController");

route.get("/avatar",getAllUsers);

route.get("/profile",getUser);

module.exports = route;

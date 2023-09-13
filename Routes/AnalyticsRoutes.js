const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const {
  bloodGroupDetailsContoller,
} = require("../Controllers/AnalyticController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddlewares, bloodGroupDetailsContoller);

module.exports = router;

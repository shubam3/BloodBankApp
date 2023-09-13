const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const {
  createInventory,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrgnaizationController,
  getOrgnaizationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../Controllers/InventoryController");

const router = express.Router();

//routes
//Add inventory || post

router.post("/create-inventory", authMiddlewares, createInventory);

//Get All Blood Records
router.get("/get-inventory", authMiddlewares, getInventoryController);

router.get(
  "/get-recent-inventory",
  authMiddlewares,
  getRecentInventoryController
);

router.get("/get-donars", authMiddlewares, getDonarsController);

router.get("/get-hospital", authMiddlewares, getHospitalController);

router.get("/get-organization", authMiddlewares, getOrgnaizationController);

router.post(
  "/get-inventory-hospital",
  authMiddlewares,
  getInventoryHospitalController
);

//GET orgnaization RECORDS
router.get(
  "/get-orgnaization-for-hospital",
  authMiddlewares,
  getOrgnaizationForHospitalController
);

module.exports = router;

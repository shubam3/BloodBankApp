const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const {
  getDonarListController,
  getHospitalListController,
  getorganizationlListController,
  deleteDonarContainer,
} = require("../Controllers/AdminController");
const adminMiddlewares = require("../middlewares/adminMiddlewares");

//router object
const router = express.Router();

//routes

//get || Donar List
router.get(
  "/donar-list",
  authMiddlewares,
  adminMiddlewares,
  getDonarListController
);

router.get(
  "/hospital-list",
  authMiddlewares,
  adminMiddlewares,
  getHospitalListController
);

router.get(
  "/org-list",
  authMiddlewares,
  adminMiddlewares,
  getorganizationlListController
);

router.delete(
  "/delete-donar/:id",
  authMiddlewares,
  adminMiddlewares,
  deleteDonarContainer
);

//export
module.exports = router;

const express = require("express");

const authService = require('../services/auth.service')

const router = express.Router();
const {
  caronaCreate,
  caronaDelete,
  caronaGetAll,
  caronaGetById,
  caronaUpdate,
  
} = require("../controllers/carona.controller");

// router.route("/criar-carona", authService.authorize).post(caronaCreate);
// router.route("/pedir-carona", authService.authorize).post(caronaJoin);
router.route("/").post(caronaCreate);
router.route("/").get(caronaGetAll);
router.route("/:id").put(caronaUpdate);
router.route("/:id").delete(caronaDelete);
router.route("/:id").get(caronaGetById);

module.exports = router;
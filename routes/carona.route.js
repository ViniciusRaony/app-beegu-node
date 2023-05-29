const express = require("express");

const authService = require('../services/auth.service')


const router = express.Router();
const {
  caronaCreate,
  caronaJoin,
} = require("../controllers/carona.controller");

router.route("/criar-carona", authService.authorize).post(caronaCreate);
router.route("/pedir-carona", authService.authorize).post(caronaJoin);

module.exports = router;
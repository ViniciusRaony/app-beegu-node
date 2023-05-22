const express = require("express");

const authService = require('../services/auth.service')

const router = express.Router();
const { 
  usuarioValidar,
} = require("../controllers/autenticacao.controller");

router.route("/").post(usuarioValidar);

module.exports = router;
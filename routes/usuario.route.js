const express = require("express");

const authService = require('../services/auth.service')

const router = express.Router();
const {
  usuarioCreate,
  usuarioDelete,
  usuarioGetAll,
  usuarioGetById,
  usuarioUpdate,
} = require("../controllers/usuario.controller");

router.route("/", authService.authorize).post(usuarioCreate);
router.route("/").get(usuarioGetAll);
router.route("/:id").put(usuarioUpdate);
router.route("/:id").delete(usuarioDelete);
router.route("/:id").get(usuarioGetById);

module.exports = router;
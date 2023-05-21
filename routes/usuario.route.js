const express = require("express");

const router = express.Router();
const {
  usuarioCreate,
  usuarioDelete,
  usuarioGetAll,
  usuarioGetById,
  usuarioUpdate,
} = require("../controllers/usuario.controller");

router.route("/cadastro").post(usuarioCreate);
router.route("/cadastro").get(usuarioGetAll);
router.route("/cadastro/:id").put(usuarioUpdate);
router.route("/cadastro/:id").delete(usuarioDelete);
router.route("/cadastro/:id").get(usuarioGetById);

module.exports = router;
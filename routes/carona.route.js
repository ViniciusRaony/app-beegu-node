const express = require("express");

const router = express.Router();
const {
  caronaCreate,
  caronaJoin,
} = require("../controllers/carona.controller");

router.route("/criar-carona").post(caronaCreate);
router.route("/pedir-carona").post(caronaJoin);
// router.route("/home").post(usuarioGetAll);
// router.route("/cadastro/:id").put(usuarioUpdate);
// router.route("/cadastro/:id").delete(usuarioDelete);
// router.route("/cadastro/:id").get(usuarioGetById);

module.exports = router;
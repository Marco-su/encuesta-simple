const {
  obtenerDatos,
  crearDocumento,
} = require("../controllers/encuesta.controller");

const router = require("express").Router();

router.route("/").get(obtenerDatos).post(crearDocumento);

module.exports = router;

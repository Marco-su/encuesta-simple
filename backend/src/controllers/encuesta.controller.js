const Encuesta = require("../models/Encuesta");

const ctrl = {};

//---
ctrl.obtenerDatos = (req, res) => {
  const lista = Encuesta.find();
  res.json({ data: lista });
};

//---
ctrl.crearDocumento = async (req, res) => {
  const emailFound = await User.findOne({ correo: req.body.email });

  if (emailFound) {
    res.json({
      message: "Ya se ha resuelto una encuesta con este correo electrónico",
    });
  }

  const newDocument = new Encuesta({});
  const createdDocument = await newDocument.save();

  res.json({
    message: "Encuesta respondida de forma exitosa",
    data: createdDocument,
  });
};

module.exports = ctrl;

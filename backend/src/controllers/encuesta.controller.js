const Encuesta = require("../models/Encuesta");

const ctrl = {};

// Functions
function prom_red(list, nombre) {
  return (
    list.reduce((acc, el) => {
      return acc + el[nombre];
    }, 0) / list.length || 0
  );
}

function prom_red_edades(list, edad, red) {
  const newList = list.filter((el) => el.edad === edad);

  return (
    newList.reduce((acc, el) => {
      return acc + el[`prom_${red}`];
    }, 0) / newList.length || 0
  );
}

//---
ctrl.obtenerDatos = async (req, res) => {
  try {
    const redes = ["fb", "ig", "wa", "twitter", "tiktok", "otra"];
    const edades = ["18-25", "26-33", "34-40", "40+"];
    let favs = {};
    let proms = {};
    let prom_edades = {};

    const list = await Encuesta.find();

    redes.forEach((el) => {
      favs[`fav_${el}`] = list.filter(
        (element) => element.favorita === el
      ).length;
    });

    redes.forEach((el) => {
      if (el === "otra") {
        el = "otras";
      }
      proms[`prom_${el}`] = prom_red(list, `prom_${el}`);
    });

    edades.forEach((el) => {
      const prom_red = {};

      redes.forEach((element) => {
        if (element === "otra") {
          element = "otras";
        }

        prom_red[element] = prom_red_edades(list, el, element);
      });

      prom_edades[`prom_${el}`] = prom_red;
    });

    const data = {
      count: list.length,
      ...favs,
      ...proms,
      ...prom_edades,
    };

    return res.json({ success: true, data });

    //---
  } catch (error) {
    return res.json({ success: false, data: error });
  }
};

//---
ctrl.crearDocumento = async (req, res) => {
  try {
    const emailFound = await Encuesta.findOne({ correo: req.body.correo });

    if (emailFound) {
      return res.json({
        success: false,
        message: "Ya se ha resuelto una encuesta con este correo electrónico",
      });
    }

    const newDocument = new Encuesta(req.body);
    const createdDocument = await newDocument.save();

    return res.json({
      success: true,
      message: "Encuesta respondida de forma exitosa",
      data: createdDocument,
    });

    //---
  } catch (error) {
    return res.json({
      success: false,
      message: "Error al crear nuevo documento",
      data: error,
    });
  }
};

module.exports = ctrl;

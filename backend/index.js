require("dotenv").config();
require("./src/config/mongoose");
const app = require("./src/server/config");

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log("Error al establecer el servidor");
  } else {
    console.log("Servidor escuchando en el puerto", port);
  }
});

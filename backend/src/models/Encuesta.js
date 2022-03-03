const { Schema, model } = require("mongoose");

const EncuestaSchema = new Schema(
  {
    correo: { type: String, required: true, trim: true },
    edad: { type: String, required: true, trim: true },
    sexo: { type: String, required: true, trim: true },
    favorita: { type: String, required: true, trim: true },
    prom_fb: { type: Number, required: true },
    prom_wa: { type: Number, required: true },
    prom_twitter: { type: Number, required: true },
    prom_tiktok: { type: Number, required: true },
    prom_ig: { type: Number, required: true },
    prom_otras: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = model("Encuesta", EncuestaSchema);

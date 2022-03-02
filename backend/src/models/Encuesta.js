const { Schema, model } = require("mongoose");

const EncuestaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    storage_name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Encuesta", EncuestaSchema);

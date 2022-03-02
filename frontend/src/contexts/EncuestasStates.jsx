import { useState } from "react";

export default function EncuestasStates() {
  const [encuestas_data, setEncuestas_data] = useState([]);

  return {
    encuestas_data,
    setEncuestas_data,
  };
}

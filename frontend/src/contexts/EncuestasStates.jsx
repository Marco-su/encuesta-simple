import { useState } from "react";

export default function EncuestasStates() {
  const [encuestas_data, setEncuestas_data] = useState(null);

  return {
    encuestas_data,
    setEncuestas_data,
  };
}

import { Routes, Route } from "react-router-dom";
import Encuesta from "../components/encuesta";
import Estadisticas from "../components/estadisticas";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/encuestas" element={<Encuesta />} />
      <Route path="/estadisticas" element={<Estadisticas />} />
    </Routes>
  );
}

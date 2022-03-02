import { Routes, Route } from "react-router-dom";
import Encuesta from "../components/encuesta";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/encuestas" element={<Encuesta />} />
    </Routes>
  );
}

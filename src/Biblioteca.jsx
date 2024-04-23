import { NavBar } from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "./routes/Inicio";

import MedicinaInterna from "./routes/Medicina/MedicinaInterna";
import Anatomia from "./routes/Medicina/Anatomia";
import Farmaco from "./routes/Medicina/Farmaco";
import Fisiologia from "./routes/Medicina/Fisiologia";
import GinecologiaYObstetricia from "./routes/Medicina/GinecologiaYObstetricia";
import Histologia from "./routes/Medicina/Histologia";
import Inmunologia from "./routes/Medicina/Inmunologia";
import Pediatria from "./routes/Medicina/Pediatria";
import Otros from "./routes/Medicina/Otros";
import CuadernodelAlumno from "./routes/Medicina/CuadernodelAlumno";
import Embriologia from "./routes/Medicina/Embriologia";
export const Biblioteca = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/medicina/Anatomia" element={<Anatomia />} />
        <Route
          path="/medicina/Cuaderno del Alumno"
          element={<CuadernodelAlumno />}
        />
        <Route path="/medicina/Embriologia" element={<Embriologia />} />
        <Route path="/medicina/Farmaco" element={<Farmaco />} />
        <Route path="/medicina/Fisiologia" element={<Fisiologia />} />
        <Route
          path="/medicina/Ginecologia y Obstetricia"
          element={<GinecologiaYObstetricia />}
        />
        <Route path="/medicina/Histologia" element={<Histologia />} />
        <Route path="/medicina/Inmunologia" element={<Inmunologia />} />
        <Route
          path="/medicina/Medicina Interna"
          element={<MedicinaInterna />}
        />
        <Route path="/medicina/Pediatria" element={<Pediatria />} />
        <Route path="/medicina/Otros" element={<Otros />} />
        {/* <Route path="/enfermeria/libros" element={<Enfermeria />} />
        <Route path="/fonoaudiologia" element={<Fonoaudiologia />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

import { NavBar } from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Fonoaudiologia } from "./routes/Fonoaudiologia";
import { Enfermeria } from "./routes/Enfermeria";
import { Inicio } from "./routes/Inicio";
import { Medicina } from "./routes/Medicina";

export const Biblioteca = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/medicina" element={<Medicina />} />
        <Route path="/enfermeria" element={<Enfermeria />} />
        <Route path="/fonoaudiologia" element={<Fonoaudiologia />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import Contatos from "./Pages/contato";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contato" element={<Contatos />} />
  </Routes>
);

export default MainRoutes;

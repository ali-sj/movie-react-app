import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";

const Routess = () => {
  return (
    <Routes>
      <Route path="/:catalog/search/:keyword" element={<Catalog />} />
      <Route path="/:catalog/:id" element={<Detail />} />
      <Route path="/:catalog" element={<Catalog />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routess;

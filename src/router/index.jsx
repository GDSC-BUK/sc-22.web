import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;

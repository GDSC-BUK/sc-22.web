import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Index from "../pages";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<Index />} />

        {/* auth pages */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;

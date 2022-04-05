import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Forum from "../services/forum";

// pages
import Index from "../pages";
// auth pages
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

// user pages
import CreateDiscussion from "../pages/createDiscussion";
import Dashboard from "../pages/Dashboard";
import Discussion from "../pages/Discussion";

function index() {
  let { discussion_id } = useParams();
  const forum_service = new Forum();
  forum_service.get_discussion(discussion_id);

  return (
    <BrowserRouter>
      <Routes>
        {/* home page */}
        <Route path="/" element={<Index />} />

        {/* auth pages */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        {/* user pages */}
        <Route path="/create" element={<CreateDiscussion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path={`/discussion/:discussion_id`} element={<Discussion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;

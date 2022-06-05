import React from "react";
import Nuovi from "../Nuovi/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nuovi />} />
      </Routes>
    </Router>
  );
};

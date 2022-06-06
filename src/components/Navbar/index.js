import React from "react";
import News from "../../app/pages/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../../app/pages/About";

export const Navbar = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<News />} /> */}
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
};

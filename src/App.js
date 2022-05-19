import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h2> Routing </h2>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contacts"> Contacts </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
BrowserRouter :  andremo a mettere gli elementi che vogllio facciano parte della navigazione all'interno di 
                 BrowserRouter;
*/

/* Routes :  l'obiettivo è quello di avere un reindirizzamento alla pagina/componente desiderata/o 
         e farlo direttamente dalla barra degli indirizzi. Routes sostanzialmente è un componente 
         che determinerà dove, nel nostro sistema, andremo ad avere i percorsi.  */

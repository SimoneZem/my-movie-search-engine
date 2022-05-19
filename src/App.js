import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Contacts />
        </div>
      </Router>
    </>
  );
}

export default App;

/*
BrowserRouter :  andremo a mettere gli elementi che vogllio facciano parte della navigazione all'interno di 
                 BrowserRouter
*/

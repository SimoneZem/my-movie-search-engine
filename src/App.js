import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <About />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Counter /> */}
      </header>
    </div>
  );
}

export default App;

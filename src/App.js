import React from "react";
import { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("Run Right Now");
    alert("Welcome Simone");
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h2 className="title"> Routing </h2>
          <Link className="link" to="/">
            {" "}
            Home{" "}
          </Link>
          <Link className="link" to="/about">
            {" "}
            About{" "}
          </Link>
          <Link className="link" to="/contacts">
            {" "}
            Contacts{" "}
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </Router>
  );
}

export default App;

/*
BrowserRouter :  E' un componente che utilizzeremo per comprendere tutti i diversi componenti
                 nell'applicazione che esisterà all'interno del Router.
                 Andremo a mettere gli elementi che voglio facciano parte della navigazione all'interno di 
                 BrowserRouter. La prima cosa da fare sarà includere nel return <Router></Router>. 
                 

/* Routes :      Routes sostanzialmente è un componente 
                 che determinerà dove, nel nostro sistema, andremo ad avere i percorsi.
                 All'interno di Routes, in poche parole, avremo i percorsi che determineranno dove 
                 andrà l'utente ;


                 <Router>
                    <Routes></Routes>
                 </Router>
                 La differenza tra Router e Routes è che se vogliamo creare un componente che esisterà ovunque all'interno
                 delle varie pagine come ad esempio la nostra navbar andrà allocata dentro Router, al di fuori di Routes.
                   
*/

/* Route :       Con il componente Route dichiariamo le nostre "rotte"
                 La sintassi corretta <Route path="/page" element={<Comp />} />.    
*/

/* Link :        Il componente link serve per creare collegamenti [ ciò che in HTML avremmo con <a></a>].
                 Se ad esempio volessimo creare una navbar con gli degli elementi cliccabili che ci
                 riportano a una delle pagine nella nostra app andremmo ad usare esattamente Link.
                 La sintassi corretta è <Link  to="/"> Comp </Link> 
                 la props "to" altro non è che un un percorso su cui verremo instradati al click 
*/

/* NB :          A prescindere dalla pagina in cui ci troviamo, la navbar verrà visualizzata sempre.
                 Questo perchè tutto ciò andremo a visualizzare nella nostra app si che troverà all'interno di 
                 Router, ma al di fuori di Routes sarà visionabile all'interno di qualsiasi pagina.
                 L'unica cosa che cambierà si troverà all'interno di Routes.
 
*/

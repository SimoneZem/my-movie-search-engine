import React from "react";

import About from "../About/About";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import "./App.css";
import CustomButton from "../CustomButton/CustomButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Column,
  List,
  LogoColumn,
  Navigation,
  NavigationBar,
  Row,
  Unordered,
  Wrapper,
} from "./styled";

export const Navbar = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation>
          <NavigationBar>
            <Row>
              <Column>
                <LogoColumn>
                  <CustomButton btnText={"Home Cinema"} />
                  <CustomButton btnText={"Serie TV"} />
                </LogoColumn>
              </Column>

              <Column>
                <Unordered>
                  <List>
                    <CustomButton btnText="Home" isLink url={"/"} />
                  </List>

                  <List>
                    <CustomButton btnText="About" isLink url={"/about"} />
                  </List>

                  <List>
                    <CustomButton btnText="Contacts" isLink url={"/contacts"} />
                  </List>
                </Unordered>
              </Column>
            </Row>
          </NavigationBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Navigation>
      </Wrapper>
    </Router>
  );
};

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
                 Questo perchè tutto ciò andremo a visualizzare nella nostra app che si troverà all'interno di 
                 Router, ma al di fuori di Routes, sarà visibile all'interno di qualsiasi pagina.
                 L'unica cosa che cambierà si troverà all'interno di Routes.
 
*/

/* Path / Exact Path : 

                  Il parametro exact entra in gioco quando habbiamo più percorsi con nomi simili

                  <Switch>
                     <Route path="/users" component={Users} />
                     <Route path="/users/create" component={CreateUser} />
                  </Switch>

                  Immaginando di avere un componente Users che mostra un elenco di utenti e
                  un componente CreateUser che viene utilizzato per creare utenti. 
                  L'URL per CreateUsers deve essere nidificato in Utenti

                  Se true, corrisponderà solo se il percorso corrisponde esattamente a location.pathname.

*/

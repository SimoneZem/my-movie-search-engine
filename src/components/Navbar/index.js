import React from "react";
import Nuovi from "../Nuovi/index";
import SerieTv from "../SerieTv/index";
import LaMiaLista from "../LaMiaLista/index";
import About from "../About/About";
import Home from "../Home/Home";
import Contacts from "../Contacts/Contacts";
import "./App.css";
import CustomButton from "../CustomButton/CustomButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Column,
  LogoColumn,
  Navcolumn,
  Navigation,
  NavigationBar,
  Row,
  Wrapper,
} from "./styled";
import Logo from "../Logo";

export const Navbar = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation>
          <NavigationBar>
            <Row>
              <Column>
                <LogoColumn>
                  {/* <Logo /> */}
                  <CustomButton btnText="Nuovi" isLink url={"/nuovi"} />
                  <CustomButton btnText="Serie TV" isLink url={"/serieTv"} />
                  <CustomButton
                    btnText="La mia lista"
                    isLink
                    url={"/laMiaLista"}
                  />
                </LogoColumn>
              </Column>

              <Column>
                <Navcolumn>
                  <CustomButton btnText="Home" isLink url={"/"} />

                  <CustomButton btnText="About" isLink url={"/about"} />

                  <CustomButton btnText="Contacts" isLink url={"/contacts"} />
                </Navcolumn>
              </Column>
            </Row>
          </NavigationBar>

          <Routes>
            <Route path="/nuovi" element={<Nuovi />} />
            <Route path="/serieTv" element={<SerieTv />} />
            <Route path="/laMiaLista" element={<LaMiaLista />} />
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
                 nell'applicazione che esister?? all'interno del Router.
                 Andremo a mettere gli elementi che voglio facciano parte della navigazione all'interno di 
                 BrowserRouter. La prima cosa da fare sar?? includere nel return <Router></Router>. 
                 

/* Routes :      Routes sostanzialmente ?? un componente 
                 che determiner?? dove, nel nostro sistema, andremo ad avere i percorsi.
                 All'interno di Routes, in poche parole, avremo i percorsi che determineranno dove 
                 andr?? l'utente ;


                 <Router>
                    <Routes></Routes>
                 </Router>
                 La differenza tra Router e Routes ?? che se vogliamo creare un componente che esister?? ovunque all'interno
                 delle varie pagine come ad esempio la nostra navbar andr?? allocata dentro Router, al di fuori di Routes.
                   
*/

/* Route :       Con il componente Route dichiariamo le nostre "rotte"
                 La sintassi corretta <Route path="/page" element={<Comp />} />.    
*/

/* Link :        Il componente link serve per creare collegamenti [ ci?? che in HTML avremmo con <a></a>].
                 Se ad esempio volessimo creare una navbar con gli degli elementi cliccabili che ci
                 riportano a una delle pagine nella nostra app andremmo ad usare esattamente Link.
                 La sintassi corretta ?? <Link  to="/"> Comp </Link> 
                 la props "to" altro non ?? che un un percorso su cui verremo instradati al click 
*/

/* NB :          A prescindere dalla pagina in cui ci troviamo, la navbar verr?? visualizzata sempre.
                 Questo perch?? tutto ci?? andremo a visualizzare nella nostra app che si trover?? all'interno di 
                 Router, ma al di fuori di Routes, sar?? visibile all'interno di qualsiasi pagina.
                 L'unica cosa che cambier?? si trover?? all'interno di Routes.
 
*/

/* Path / Exact Path : 

                  Il parametro exact entra in gioco quando habbiamo pi?? percorsi con nomi simili

                  <Switch>
                     <Route path="/users" component={Users} />
                     <Route path="/users/create" component={CreateUser} />
                  </Switch>

                  Immaginando di avere un componente Users che mostra un elenco di utenti e
                  un componente CreateUser che viene utilizzato per creare utenti. 
                  L'URL per CreateUsers deve essere nidificato in Utenti

                  Se true, corrisponder?? solo se il percorso corrisponde esattamente a location.pathname.

*/

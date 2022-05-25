import { Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from './components/global/GlobalStyles';

import Home from "./components/pages/home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Match from "./components/pages/match/Match";
import Connection from "./components/pages/connection/Connection";
import Matches from "./components/pages/matches/Matches";
import Contact from "./components/pages/contact/Contact";
import Panier from "./components/pages/panier/Panier";
import Profile from "./components/pages/profile/Profile";
import Commandes from "./components/pages/commandes/Commandes";
import Deconnexion from "./components/pages/deconnexion/Deconnexion";
function App() {

  const [loggin, setLoggin] = useState(false);
 
  // mob-x state tree 
  // react query

  return (
    <>
      <GlobalStyle />
      <Header loggin={loggin}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connection loggin={loggin} setLoggin={setLoggin} />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/panier" 
          element={ 
            loggin ? 
              <Panier setLoggin={setLoggin}/> 
                  : 
              <Navigate to="/connexion" replace />
            } 
        />
        <Route 
          path="/mes-commandes" 
          element={ 
            loggin ? 
              <Commandes /> 
                  : 
              <Navigate to="/connexion" replace />
            } 
        />
        <Route 
          path="/profile" 
          element={
            loggin ? 
              <Profile setLoggin={setLoggin}/> 
                : 
              <Navigate to="/connexion" replace />
            } 
        />
        <Route 
          path="/deconnection" 
          element={ <Deconnexion setLoggin={setLoggin} /> } 
        />
        <Route path="/billetterie/sport" element={<Matches />} />
        <Route path="/match">
          <Route path=":id" element={<Match />} />
        </Route>  
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
   
  );
}

export default App;

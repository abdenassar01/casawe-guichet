import { Routes, Route, Navigate } from "react-router-dom";

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
import Error404 from "./components/pages/error/Error404";

import { useUserStore } from "./models/userStore";

import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/private_rout/PrivateRoute";

const App = observer(() => { 

  const [ isAuthentificated, setAuthentificated ] = useState(false)
  const root = useUserStore();

  useEffect(() => {
    setAuthentificated(sessionStorage.getItem("isAuthentificated"))
    if(isAuthentificated){
      root.setToken(sessionStorage.getItem("token"))
    }
  },[isAuthentificated])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={ <Connection />} />
        <Route path="/contact" element={ <Contact />} />
        <Route 
          path="/panier" 
          element={ <PrivateRoute Element={ <Panier /> } /> } 
        />
        <Route 
          path="/mes-commandes" 
          element={ 
            <PrivateRoute Element={ <Commandes /> } /> } 
        />
        <Route 
          path="/profile" 
          element={ <PrivateRoute Element={ <Profile /> } /> }
        />
        <Route 
          path="/deconnexion" 
          element={ <Deconnexion /> } 
        />
        <Route path="/billetterie/sport" element={<Matches />} />
        <Route path="/match">
          <Route path=":id" element={<Match />} />
        </Route>  
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
})

export default App;
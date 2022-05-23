import { Routes, Route, Navigate } from "react-router-dom";

import { useState } from "react";

import GlobalStyle from './components/global/GlobalStyles';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Match from "./components/match/Match";
import Connection from "./components/connection/Connection";
import Matches from "./components/matches/Matches";
import Contact from "./components/contact/Contact";
import Panier from "./components/panier/Panier";

function App() {

  const [loggin, setLoggin] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Header loggin={loggin}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={loggin ? <Panier setLoggin={setLoggin}/> : <Navigate to="/" replace />} />
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

import { Routes, Route } from "react-router-dom";

import GlobalStyle from './components/global/GlobalStyles';

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Match from "./components/match/Match";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match">
          <Route path=":id" element={<Match />} />
        </Route>
        <Route path="/*" element={<h1>Erreur 404</h1>} />
      </Routes>
      <Footer />
    </>
   
  );
}

export default App;

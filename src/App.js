import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Ropa from './Components/ropa/Ropa';
import Maquillaje from './Components/maquillaje/Maquillaje';
import Accesorios from './Components/accesorios/Accesorios';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Redirigir al usuario a la página de inicio */}
          <Route path="/" element={<Navigate to="" />} />

          {/* Rutas para las otras páginas */}
          <Route path="" element={<Home />} />
          <Route path="/ropa" element={<Ropa />} />
          <Route path="/maquillaje" element={<Maquillaje />} />
          <Route path="/accesorios" element={<Accesorios />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

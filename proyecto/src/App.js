import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Layout/navbar'; // Import Navbar
import Footer from './Componentes/Layout/footer'; // Import Footer
import HeroSection from './Componentes/Home/Herosection'; // Import HeroSection
import Proyectos from './Componentes/Home/Proyectos'; // Import Proyectos
import Habilidades from './Componentes/Home/Habilidades'; // Import Habiliades

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
              </>
            }
          />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/habilidades" element={<Habilidades />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

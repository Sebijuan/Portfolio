import React from 'react';
import '../Estilos/paginaprincipal.css'; // Corrected import path
import HeroSection from './Herosection'; // Import HeroSection

function Inicio() {
    return (
        <div className="inicio-container"> {/* Add class to fill remaining space */}
            <HeroSection /> {/* Use HeroSection component */}
        </div>
    );
}

export default Inicio;

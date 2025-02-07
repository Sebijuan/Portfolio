import React from 'react';
import '../Estilos/paginaprincipal.css'; // Corrected import path

function HeroSection() {
    return (
        <div className="inicio-container"> {/* Add class to fill remaining space */}
            <div className="hero-section"> {/* Add div wrapper */}
                <h1>Sebastian Juan Coca</h1>
                <h2>Desarrollador de Aplicaciones Web</h2>
                <section id="hero">
                    <img src="/imagenes/yo.jpg" alt="Hero" className="hero-image animated-image" /> {/* Corrected image source and added animation class */}
                    <h2>Bienvenido a Mi Portafolio</h2>
                    <p>Explora mis proyectos y conoce más sobre mí.</p>
                </section>
            </div>
          
        </div>
    );
}

export default HeroSection;

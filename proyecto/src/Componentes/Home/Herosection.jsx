import React from 'react';
import '../Estilos/paginaprincipal.css'; // Corrected import path

function HeroSection() {
    return (
        <section id="hero">
            <img src="/imagenes/yo.jpg" alt="Hero" className="hero-image" /> {/* Corrected image source */}
            <h2>Bienvenido a Mi Portafolio</h2>
            <p>Explora mis proyectos y conoce más sobre mí.</p>
        </section>
    );
}

export default HeroSection;

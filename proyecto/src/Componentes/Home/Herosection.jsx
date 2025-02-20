import React from 'react';
import '../Estilos/paginaprincipal.css'; 

function HeroSection() {
    return (
        <div className="inicio-container"> {/* Añadir clase para llenar el espacio restante */}
            <div className="hero-section"> {/* Añadir contenedor div */}
                <h1>Sebastian Juan Coca</h1>
                <h2>Desarrollador de Aplicaciones Web</h2>
                <section id="hero">
                    <img src="/imagenes/yo.jpg" alt="Hero" className="hero-image animated-image" /> {/* Fuente de imagen corregida y clase de animación añadida */}
                    <h2>Bienvenido a Mi Portafolio</h2>
                    <p>Explora mis proyectos y conoce más sobre mí.</p>
                </section>
            </div>
        </div>
    );
}

export default HeroSection;

import React from 'react';
import '../Estilos/Proyectos.css';

function Proyectos() {
    return (
        <section id="projects">
            <h2>Proyectos Destacados</h2>
            <div className="content-list">
                <div className="content-card">
                    <h3>SJCUSTOMS</h3>
                    <img src="/imagenes/icon.jpg" alt="" className="project-image animated-image" /> {/* Añadir imagen con animación */}
                    <p>
                        Bienvenido a <strong>SJCUSTOMS</strong>, tu destino definitivo para la personalización y tuneo de coches. Nuestra plataforma está diseñada para los entusiastas del automóvil que desean transformar sus vehículos en verdaderas obras de arte sobre ruedas.
                    </p>
                    <p>
                        En <strong>SJCUSTOMS</strong>, ofrecemos una amplia gama de servicios de personalización, desde modificaciones estéticas hasta mejoras de rendimiento. Nuestro equipo de expertos trabaja con las últimas tecnologías y tendencias para asegurarse de que cada coche que pasa por nuestras manos se convierta en una expresión única de estilo y personalidad.
                    </p>
                    <p>
                        Explora nuestra galería de proyectos anteriores y descubre cómo hemos ayudado a nuestros clientes a realizar sus sueños automovilísticos. Ya sea que busques un cambio sutil o una transformación completa, en <strong>SJCUSTOMS</strong> estamos comprometidos a ofrecerte resultados excepcionales.
                    </p>
                    <a href="https://ec-sebastian-juan-coca-lt1k.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visitar Proyecto
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Proyectos;

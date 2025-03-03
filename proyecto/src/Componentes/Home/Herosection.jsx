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
                </section>
            </div>
            <section id="estudios-trabajos">
                <div className="estudios-trabajos-container">
                    <h2>Estudios y Trabajos</h2>
                    <div className="estudios-trabajos-content">
                        <div className="estudios">
                            <h3>Estudios</h3>
                            <div className="estudio-item">
                                <h4>Bachillerato Tecnológico</h4>
                                <p>Proporcionó una sólida base en ciencias y tecnología.</p>
                            </div>
                            <div className="estudio-item">
                                <h4>Grado Superior de Desarrollo de Aplicaciones Web</h4>
                                <p>Adquiriendo habilidades avanzadas en programación y desarrollo web.</p>
                            </div>
                        </div>
                        <div className="trabajos">
                            <h3>Trabajos</h3>
                            <div className="trabajo-item">
                                <h4>Teleoperador en Konecta</h4>
                                <p>Desarrollé habilidades de comunicación y atención al cliente.</p>
                            </div>
                            <div className="trabajo-item">
                                <h4>Camarero de boda en Hacienda el Vizir</h4>
                                <p>Demostré mi capacidad para trabajar en equipo y ofrecer un excelente servicio al cliente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;

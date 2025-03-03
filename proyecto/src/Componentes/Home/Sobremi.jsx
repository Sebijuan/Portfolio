import React from 'react';
import '../Estilos/Sobremi.css';

function Sobremi() {
    return (
        <section id="about">
            <div className="sobremi-container">
                <h2>Sobre Mí</h2>
                <div className="sobremi-content">
                    <div className="sobremi-images">
                        <img src="/imagenes/sobremi1.webp" alt="Imagen 1" className="sobremi-image" />
                        <img src="/imagenes/sobremi2.webp" alt="Imagen 2" className="sobremi-image" />
                        <img src="/imagenes/sobremi3.webp" alt="Imagen 3" className="sobremi-image" />
                    </div>
                    <div className="sobremi-text">
                        <h3>Introducción</h3>
                        <p>
                            Soy un estudiante de desarrollo de aplicaciones web apasionado por la tecnología y la programación. 
                            Actualmente, estoy cursando un Grado Superior de Desarrollo de Aplicaciones Web y me especializo en el desarrollo 
                            de aplicaciones web.
                        </p>
                        <h3>Experiencia</h3>
                        <p>
                            Tengo experiencia en diversas tecnologías como <strong>HTML, CSS, JavaScript, React, y Node.js</strong>. Me esfuerzo por 
                            mantenerme actualizado con las últimas tendencias y mejores prácticas en el desarrollo web. 
                        </p>
                        <h3>Intereses</h3>
                        <p>
                            Fuera del ámbito tecnológico, me encanta practicar deportes y mantenerme activo.
                        </p>
                        <h3>Compromiso</h3>
                        <p>
                            Estoy comprometido con el aprendizaje continuo y siempre busco oportunidades para mejorar mis habilidades y 
                            conocimientos. 
                        </p>
                        <h3>Objetivos</h3>
                        <p>
                            Estoy siempre en busca de nuevos desafíos y oportunidades para aplicar mis conocimientos en proyectos reales. 
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobremi;
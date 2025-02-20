import React from 'react';
import '../Estilos/Sobremi.css'; // Corrected import path

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
                        <p>
                            Soy un estudiante de desarrollo de aplicaciones web apasionado por la tecnología y la programación. 
                            Actualmente, estoy cursando un Grado Superior de Desarrollo de Aplicaciones Web y me especializo en el desarrollo 
                            de aplicaciones web. Mi objetivo es crear soluciones innovadoras y eficientes que mejoren la experiencia del 
                            usuario y resuelvan problemas complejos.
                        </p>
                        <p>
                            Tengo experiencia en diversas tecnologías como HTML, CSS, JavaScript, React, y Node.js. Me esfuerzo por 
                            mantenerme actualizado con las últimas tendencias y mejores prácticas en el desarrollo web. Además, disfruto 
                            trabajando en equipo y colaborando con otros desarrolladores para alcanzar metas comunes.
                        </p>
                        <p>
                            Fuera del ámbito tecnológico, me encanta practicar deportes y mantenerme activo. Creo firmemente en el equilibrio 
                            entre el trabajo y la vida personal, y encuentro en los deportes una excelente manera de despejar la mente y 
                            mantenerme saludable.
                        </p>
                        <p>
                            Estoy comprometido con el aprendizaje continuo y siempre busco oportunidades para mejorar mis habilidades y 
                            conocimientos. Mi pasión por la programación y mi dedicación al trabajo me impulsan a superar desafíos y alcanzar 
                            la excelencia en cada proyecto que emprendo.
                        </p>
                        <p>
                            Estoy siempre en busca de nuevos desafíos y oportunidades para aplicar mis conocimientos en proyectos reales. 
                            Mi objetivo es seguir creciendo como desarrollador y contribuir a la creación de aplicaciones web que sean tanto 
                            innovadoras como útiles para los usuarios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobremi;
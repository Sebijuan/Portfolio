import React from 'react';
import '../Estilos/paginaprincipal.css'; // Corrected import path
import HeroSection from './Herosection'; // Import HeroSection

function Inicio() {
    return (
        <div className="inicio-container"> {/* Add class to fill remaining space */}
            <h1>Sebastian Juan Coca</h1>
            <section id="hero">
               
                <h2>Bienvenido a Mi Portafolio</h2>
                <p>Explora mis proyectos y conoce más sobre mí.</p>
            </section>
            <HeroSection /> {/* Use HeroSection component */}
            <section id="about">
                <h2>Sobre Mí</h2>
                <p>
                    Soy un estudiante de desarrollo web apasionado por la tecnología y la programación. 
                    Actualmente, estoy cursando una licenciatura en Ciencias de la Computación y me especializo 
                    en el desarrollo de aplicaciones web. Mi objetivo es crear soluciones innovadoras y eficientes 
                    que mejoren la experiencia del usuario y resuelvan problemas complejos.
                </p>
                <p>
                    Tengo experiencia en diversas tecnologías como HTML, CSS, JavaScript, React, y Node.js. 
                    Me esfuerzo por mantenerme actualizado con las últimas tendencias y mejores prácticas en 
                    el desarrollo web. Además, disfruto trabajando en equipo y colaborando con otros desarrolladores 
                    para alcanzar metas comunes.
                </p>
                <p>
                    Estoy comprometido con el aprendizaje continuo y siempre busco oportunidades para mejorar mis 
                    habilidades y conocimientos. Mi pasión por la programación y mi dedicación al trabajo me impulsan 
                    a superar desafíos y alcanzar la excelencia en cada proyecto que emprendo.
                </p>
            </section>
            <section id="projects">
                <h2>Proyectos</h2>
                <div className="content-list">
                    <div className="content-card">
                        <h3>Proyecto 1</h3>
                        <p>Desarollando una pagina Web de Personalizacion y Tuneo de Coches</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Inicio;

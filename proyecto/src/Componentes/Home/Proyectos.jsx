import React from 'react';
import '../Estilos/Proyectos.css';

function Proyectos() {
    return (
        <section id="projects">
            <h2>Proyectos Destacados</h2>
            <div className="content-list">
                <div className="content-card">
                    <h3>SJCUSTOMS</h3>
                    <p>
                        Explora nuestra innovadora página web dedicada a la personalización y tuneo de coches. En SJCUSTOMS, ofrecemos una experiencia única para los entusiastas del automóvil, permitiéndoles transformar sus vehículos con estilo y precisión.
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

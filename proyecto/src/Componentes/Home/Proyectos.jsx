import React from 'react';
import '../Estilos/Proyectos.css'; 

function Proyectos() {
    return (
        <section id="projects">
            <h2>Proyectos</h2>
            <div className="content-list">
                <div className="content-card">
                    <h3>Mi Proyecto</h3>
                    <p>
                        Desarollando una pagina Web de Personalizacion y Tuneo de Coches llamada "SJCUSTOMS"
                        <br />
                        <a href="https://ec-sebastian-juan-coca-lt1k.vercel.app/" target="_blank" rel="noopener noreferrer">Entrar en la Pagina del Proyecto</a>
                    </p>
                </div>
                
            </div>
        </section>
    );
}

export default Proyectos;

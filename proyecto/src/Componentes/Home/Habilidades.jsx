import React from 'react';
import '../Estilos/Habilidades.css'; // Corrected import path

function Habilidades() {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div className="content-list">
                <div className="content-card">
                    <h3>Frontend</h3>
                    <p>
                        <ul>
                            <li><img src="/imagenes/html.webp" alt="HTML" className="skill-icon" /> HTML</li>
                            <li><img src="/imagenes/css.png" alt="CSS" className="skill-icon" /> CSS</li>
                            <li><img src="/imagenes/javascript.png" alt="JavaScript" className="skill-icon" /> JavaScript</li>
                            <li><img src="/imagenes/react.jpg" alt="React" className="skill-icon" /> React</li>
                        </ul>
                    </p>
                </div>
                <div className="content-card">
                    <h3>Backend</h3>
                    <p>
                        <ul>
                            <li><img src="/imagenes/nodejs.png" alt="Node.js" className="skill-icon" /> Node.js</li>
                            <li><img src="/imagenes/express.png" alt="Express" className="skill-icon" /> Express</li>
                            <li><img src="/imagenes/mongodb.png" alt="MongoDB" className="skill-icon" /> MongoDB</li>
                            <li><img src="/imagenes/mysql.png" alt="MySQL" className="skill-icon" /> MySQL</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Habilidades;
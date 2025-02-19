import React from 'react';
import '../Estilos/Habilidades.css'; // Corrected import path

function Habilidades() {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            <div className="content-list">
                <div className="content-card">
                    <h3>Frontend</h3>
                    <ul>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/html.webp" alt="HTML" className="skill-icon" /> HTML
                            </a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/css.png" alt="CSS" className="skill-icon" /> CSS
                            </a>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/javascript.png" alt="JavaScript" className="skill-icon" /> JavaScript
                            </a>
                        </li>
                        <li>
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/react.jpg" alt="React" className="skill-icon" /> React
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content-card">
                    <h3>Backend</h3>
                    <ul>
                        <li>
                            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/nodejs.png" alt="Node.js" className="skill-icon" /> Node.js
                            </a>
                        </li>
                        <li>
                            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/express.png" alt="Express" className="skill-icon" /> Express
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/mongodb.png" alt="MongoDB" className="skill-icon" /> MongoDB
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/mysql.png" alt="MySQL" className="skill-icon" /> MySQL
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Habilidades;
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
                            {/* Breve resumen sobre HTML */}
                            <p>HTML es el lenguaje estándar para crear páginas web. Define la estructura del contenido web.</p>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/css.png" alt="CSS" className="skill-icon" /> CSS
                            </a>
                            {/* Breve resumen sobre CSS */}
                            <p>CSS es el lenguaje utilizado para describir la presentación de un documento HTML. Controla el diseño visual.</p>
                        </li>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/javascript.png" alt="JavaScript" className="skill-icon" /> JavaScript
                            </a>
                            {/* Breve resumen sobre JavaScript */}
                            <p>JavaScript es un lenguaje de programación que permite crear contenido dinámico y interactivo en las páginas web.</p>
                        </li>
                        <li>
                            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/react.jpg" alt="React" className="skill-icon" /> React
                            </a>
                            {/* Breve resumen sobre React */}
                            <p>React es una biblioteca de JavaScript para construir interfaces de usuario. Facilita la creación de componentes reutilizables.</p>
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
                            {/* Breve resumen sobre Node.js */}
                            <p>Node.js es un entorno de ejecución para JavaScript que permite construir aplicaciones del lado del servidor.</p>
                        </li>
                        <li>
                            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/express.png" alt="Express" className="skill-icon" /> Express
                            </a>
                            {/* Breve resumen sobre Express */}
                            <p>Express es un framework para Node.js que facilita la creación de aplicaciones web y APIs robustas y escalables.</p>
                        </li>
                        <li>
                            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/mongodb.png" alt="MongoDB" className="skill-icon" /> MongoDB
                            </a>
                            {/* Breve resumen sobre MongoDB */}
                            <p>MongoDB es una base de datos NoSQL que almacena datos en formato JSON, ideal para aplicaciones con grandes volúmenes de datos.</p>
                        </li>
                        <li>
                            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/mysql.png" alt="MySQL" className="skill-icon" /> MySQL
                            </a>
                            {/* Breve resumen sobre MySQL */}
                            <p>MySQL es un sistema de gestión de bases de datos relacional, ampliamente utilizado para almacenar y gestionar datos estructurados.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Habilidades;
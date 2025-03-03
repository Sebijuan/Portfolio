import React from 'react';
import '../Estilos/Contacto.css';

function Contacto() {
    return (
        <section id="contacto">
            <div className="contacto-container">
                <h2>Contacto</h2>
                <p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios:</p>
                <ul className="contacto-lista">
                    <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:sebijuacoc20@gmail.com?subject=Contacto%20desde%20Portafolio&body=Hola%20Sebastian,">sebijuacoc20@gmail.com</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <span>+34 640 52 45 49</span>
                    </li>
                    <li>
                        <i className="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/sebastian-juan-coca-757351333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <i className="fab fa-github"></i>
                        <a href="https://github.com/Sebijuan?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            </div>
            <div className="contacto-images">
                <img src="/imagenes/contacto.jpeg" alt="Contacto 1" className="contacto-image" />
                <img src="/imagenes/contacto2.jpeg" alt="Contacto 2" className="contacto-image" />
            </div>
        </section>
    );
}

export default Contacto;

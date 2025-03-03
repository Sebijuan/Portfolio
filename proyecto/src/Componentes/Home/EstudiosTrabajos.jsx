import React from 'react';
import '../Estilos/EstudiosTrabajos.css';

function EstudiosTrabajos() {
    return (
        <section id="estudios-trabajos">
            <div className="estudios-trabajos-container">
                <h2>Estudios y Trabajos</h2>
                <div className="estudios-trabajos-content">
                    <div className="estudios">
                        <h3>Estudios</h3>
                        <p>
                            He completado el Bachillerato Tecnológico, lo que me ha proporcionado una sólida base en ciencias y tecnología. Actualmente, estoy cursando un Grado Superior de Desarrollo de Aplicaciones Web, donde estoy adquiriendo habilidades avanzadas en programación y desarrollo web.
                        </p>
                    </div>
                    <div className="trabajos">
                        <h3>Trabajos</h3>
                        <p>
                            He trabajado como Teleoperador en la empresa Konecta, donde desarrollé habilidades de comunicación y atención al cliente. Además, he trabajado como camarero de boda en Hacienda el Vizir, demostrando mi capacidad para trabajar en equipo y ofrecer un excelente servicio al cliente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EstudiosTrabajos;

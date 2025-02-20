import React, { useState, useRef } from 'react';
import '../Estilos/Blog.css'; // Ensure you have a corresponding CSS file for styling

function Blog() {
    const [expandedPosts, setExpandedPosts] = useState({});
    const postRefs = useRef({});

    const toggleExpand = (postId) => {
        setExpandedPosts(prevState => {
            const newState = {
                ...prevState,
                [postId]: !prevState[postId]
            };
            if (newState[postId]) {
                postRefs.current[postId].scrollIntoView({ behavior: 'smooth' });
            }
            return newState;
        });
    };

    return (
        <>
            <section id="blog">
                <div className="blog-container" style={{ paddingBottom: '50px' }}>
                    <h2>Blog</h2>
                    <div className="blog-content">
                        <article className="blog-post" key="post-1" ref={el => postRefs.current[1] = el}>
                            <h3>Mi Primer Proyecto Web</h3>
                            <p>
                                En este post, comparto mi experiencia desarrollando mi primer proyecto web. Desde la planificación inicial hasta la implementación final, 
                                detallo los desafíos que enfrenté y las lecciones que aprendí a lo largo del camino.
                            </p>
                            {expandedPosts[1] && (
                                <p>
                                    Crear mi primer proyecto web fue un reto emocionante. Quería desarrollar una página interactiva para amantes del tuning, donde pudieran explorar y personalizar coches. Aprender a manejar JavaScript para crear galerías dinámicas y configuradores fue esencial, pero también enfrenté desafíos con la optimización de carga y la adaptación a dispositivos móviles. Este proyecto me enseñó mucho sobre desarrollo web, diseño responsivo y la importancia de ofrecer una experiencia de usuario fluida. ¡Un gran primer paso para seguir aprendiendo! 🚗💨 #WebDevelopment #Tuning #Personalización

                                </p>
                            )}
                            <button onClick={() => toggleExpand(1)} className="read-more">
                                {expandedPosts[1] ? 'Leer menos' : 'Leer más'}
                            </button>
                        </article>
                        <article className="blog-post" key="post-2" ref={el => postRefs.current[2] = el}>
                            <h3>Consejos para Aprender JavaScript</h3>
                            <p>
                                JavaScript es una de las tecnologías más importantes en el desarrollo web. En este artículo, ofrezco algunos consejos y recursos útiles 
                                para aquellos que están comenzando a aprender JavaScript.
                            </p>
                            {expandedPosts[2] && (
                                <p>
                                   Para aprender JavaScript de manera efectiva, comienza con los fundamentos como variables, funciones y el DOM. Practica con proyectos pequeños y usa la consola del navegador para probar código. Aprende asincronía con setTimeout, Promises y async/await para manejar APIs. Consulta recursos como MDN Web Docs y JavaScript.info. Una vez dominado lo básico, explora frameworks como React o Vue. Mejora tus habilidades resolviendo desafíos en CodeWars o LeetCode y colaborando en proyectos de código abierto en GitHub. La práctica constante y la participación en la comunidad acelerarán tu aprendizaje.
                                </p>
                            )}
                            <button onClick={() => toggleExpand(2)} className="read-more">
                                {expandedPosts[2] ? 'Leer menos' : 'Leer más'}
                            </button>
                        </article>
                      
                    </div>
                </div>
            </section>
          
        </>
    );
}

export default Blog;

import React, { useState } from 'react';
import '../Estilos/Blog.css'; // Ensure you have a corresponding CSS file for styling

function Blog() {
    const [expandedPosts, setExpandedPosts] = useState({});

    const toggleExpand = (postId) => {
        setExpandedPosts(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
    };

    return (
        <section id="blog">
            <div className="blog-container">
                <h2>Blog</h2>
                <div className="blog-content">
                    <article className="blog-post">
                        <h3>Mi Primer Proyecto Web</h3>
                        <p>
                            En este post, comparto mi experiencia desarrollando mi primer proyecto web. Desde la planificación inicial hasta la implementación final, 
                            detallo los desafíos que enfrenté y las lecciones que aprendí a lo largo del camino.
                        </p>
                        {expandedPosts[1] && (
                            <p>
                                Aquí puedes agregar más detalles sobre tu primer proyecto web, incluyendo tecnologías utilizadas, problemas específicos que resolviste, 
                                y cualquier otra información relevante que quieras compartir.
                            </p>
                        )}
                        <button onClick={() => toggleExpand(1)} className="read-more">
                            {expandedPosts[1] ? 'Leer menos' : 'Leer más'}
                        </button>
                    </article>
                    <article className="blog-post">
                        <h3>Consejos para Aprender JavaScript</h3>
                        <p>
                            JavaScript es una de las tecnologías más importantes en el desarrollo web. En este artículo, ofrezco algunos consejos y recursos útiles 
                            para aquellos que están comenzando a aprender JavaScript.
                        </p>
                        {expandedPosts[2] && (
                            <p>
                                Aquí puedes agregar más consejos y recursos, como libros recomendados, tutoriales en línea, y prácticas recomendadas para mejorar tus habilidades en JavaScript.
                            </p>
                        )}
                        <button onClick={() => toggleExpand(2)} className="read-more">
                            {expandedPosts[2] ? 'Leer menos' : 'Leer más'}
                        </button>
                    </article>
                    <article className="blog-post">
                        <h3>Explorando React</h3>
                        <p>
                            React es una biblioteca poderosa para construir interfaces de usuario. Aquí, exploro algunas de sus características clave y comparto 
                            ejemplos prácticos para ayudarte a comenzar con React.
                        </p>
                        {expandedPosts[3] && (
                            <p>
                                Aquí puedes agregar más información sobre React, como componentes avanzados, hooks, y cómo gestionar el estado en aplicaciones React.
                            </p>
                        )}
                        <button onClick={() => toggleExpand(3)} className="read-more">
                            {expandedPosts[3] ? 'Leer menos' : 'Leer más'}
                        </button>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Blog;

import React from 'react';
import '../Estilos/paginaprincipal.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleHomeClick = (event) => {
        event.preventDefault();
        navigate('/');
    };

    const handleAboutClick = (event) => {
        event.preventDefault();
        window.location.href = '/sobremi';
    };

    const handleProyectosClick = (event) => {
        event.preventDefault();
        window.location.href = '/proyectos';
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        window.location.href = '/contacto';
    };

    

    const handleHabilidadesClick = (event) => {
        event.preventDefault();
        window.location.href = '/habilidades';
    };

    const handleBlogClick = (event) => {
        event.preventDefault();
        window.location.href = '/blog';
    };

    return (
        <nav className="navbar navbar-visible">
            <ul>
                <li><a href="#home" onClick={handleHomeClick} className="navbar-link">Inicio</a></li>
                <li><a href="/sobremi" onClick={handleAboutClick} className="navbar-link">Sobre Mi</a></li>
                <li><a href="/proyectos" onClick={handleProyectosClick} className="navbar-link">Proyectos</a></li>
                <li><a href="/blog" onClick={handleBlogClick} className="navbar-link">Blog</a></li>
                <li><a href="/habilidades" onClick={handleHabilidadesClick} className="navbar-link">Habilidades</a></li>
                <li><a href="/contacto" onClick={handleContactClick} className="navbar-link">Contacto</a></li>
            </ul> 
             

        </nav>
    );
};

export default Navbar;

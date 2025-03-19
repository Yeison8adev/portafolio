import React from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Mi Portafolio</div>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre Mí</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

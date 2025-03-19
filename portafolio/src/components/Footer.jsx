import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <p>
            &copy; {currentYear} Mi Portafolio. Todos los derechos reservados.
          </p>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="social-icon">GitHub</i>
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="social-icon">LinkedIn</i>
          </a>
          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="social-icon">Twitter</i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

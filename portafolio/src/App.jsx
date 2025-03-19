// src/App.jsx

import React from "react";
import Layout from "./components/Layout";
import "./styles/variables.css";
import "./App.css";

function App() {
  return (
    <Layout>
      <div className="home-page">
        <section id="inicio" className="hero-section">
          <h1>¡Hola, soy Desarrollador Web!</h1>
          <p>Bienvenido a mi portafolio de proyectos</p>
        </section>

        <section id="sobre-mi">
          <h2 className="section-title">Sobre Mí</h2>
          <p>Aquí incluiremos información sobre ti y tus habilidades.</p>
        </section>

        <section id="proyectos">
          <h2 className="section-title">Mis Proyectos</h2>
          <p>Aquí mostraremos tus proyectos.</p>
        </section>

        <section id="contacto">
          <h2 className="section-title">Contacto</h2>
          <p>Información de contacto y formulario.</p>
        </section>
      </div>
    </Layout>
  );
}

export default App;

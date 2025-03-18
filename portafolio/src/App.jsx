// src/App.jsx

import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/variables.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <div className="logo">MI PORTAFOLIO</div>
        <ThemeToggle />
      </header>
      <main>
        <h1>Contenido de mi portafolio</h1>
        <p>Esta es la estructura inicial de mi portafolio web.</p>
      </main>
    </div>
  );
}

export default App;

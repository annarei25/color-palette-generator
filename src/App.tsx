<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./App.css";
interface ColorCard {
  id: number;
  hex: string;
  isLocked: boolean;
}

const getRandomHex = () : string => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};

function App() {
  const [colors, setColors] = useState<ColorCard[]>([
    { id: 1, hex: getRandomHex(), isLocked: false },
    { id: 2, hex: getRandomHex(), isLocked: false },
    { id: 3, hex: getRandomHex(), isLocked: false },
    { id: 4, hex: getRandomHex(), isLocked: false },
    { id: 5, hex: getRandomHex(), isLocked: false },
  ]);

  const generateColors = () => {
    const newColors = colors.map((color) => {
      if (color.isLocked) return color;
      return { ...color, hex: getRandomHex() };
    });
    setColors(newColors);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        generateColors();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [generateColors]);

  const toggleLock = (id: number) => {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, isLocked: !color.isLocked } : color
      )
    );
  };

  return (
    <div className="container">
      <h1>Generador de Paletas 🎨</h1>

      <div className="palette">
        {colors.map((color) => (
          <div
            key={color.id}
            className="color-card"
            style={{ backgroundColor: color.hex }}
            onClick={() => toggleLock(color.id)}
          >
            <span className="hex-code">{color.hex}</span>
            <span className="lock-icon">
              {/* Renderizado condicional: Icono de candado */}
              {color.isLocked ? "🔒" : "🔓"}
            </span>
          </div>
        ))}
      </div>

      <button className="generate-btn" onClick={generateColors}>
        Generar Nueva Paleta (Espacio)
      </button>
    </div>
  );
}

export default App;
>>>>>>> Stashed changes

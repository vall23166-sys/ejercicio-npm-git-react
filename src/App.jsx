import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import PlanetScene from './PlanetScene'
import confetti from 'canvas-confetti'; // <--- Import del confetti

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Escena 3D de fondo */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
        <PlanetScene />
      </div>

      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        {/* Botón de canvas-confetti */}
        <button
          type="button"
          className="counter"
          style={{ marginLeft: '10px' }}
          onClick={() => {
            confetti({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.6 }
            });
          }}
        >
          ¡Lanzar Confetti!
        </button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
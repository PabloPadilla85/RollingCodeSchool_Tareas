import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  let estaLogueado = false;
  let contenido;

    estaLogueado == true ? 
        contenido = <p>Bienvenido de vuelta</p>
    : contenido = 
        <div>
            <p>Por favor Inicia sesión</p>
            <button className="btn btn-primary">Botón</button>
        </div>
  return (
    <>
      <header className='cabezera'>
        <h2>Ejercicio 4 -React</h2>
      </header>
      <main>
        <div className='contenido'>
          {contenido}
        </div>
      </main>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function App() {

  const tareas = ["Hacer ejercicio", "Estudiar React", "Leer"];

  return (
    <>
      <header className='encabezado'><h2>Ejercicio n°4 - React</h2></header>
      <main>
        <div className='contenedor'>
          <ul>
            {
              tareas.map(function (valor) {
                return (
                  <li key={tareas.indexOf(valor)}>
                    <p> {valor} </p>
                  </li>)
              })
            }
          </ul>
        </div>
      </main>
    </>
  )
}

export default App

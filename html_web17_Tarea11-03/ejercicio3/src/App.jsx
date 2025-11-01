import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const nombre = "María";
  const edad = 21;
  
  return (
    <>
      <header className="cabezera">
        <h2>Ejercicio 3 - React</h2>
      </header>
      <p>{nombre} : {edad} </p>
    </>
  )
}

export default App

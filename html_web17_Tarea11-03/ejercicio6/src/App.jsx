import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserCard from './UserCard'
import TaskList from './taskList'
import Footer from './Footer'
import './styles.css'

function App() {
  return (
    <>
    <header>
      <h2>Ejercicio n° 6 - React</h2>
    </header>
    <main>
      <div className='estado'>
        <UserCard/>
      </div>
      <div className='listado'>
        <TaskList/>
      </div>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App

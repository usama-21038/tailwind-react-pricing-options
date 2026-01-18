import { useState } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>  
        <Navbar></Navbar>
        <DaisyNav></DaisyNav>
      </header>
 

      
    </>
  )
}

export default App

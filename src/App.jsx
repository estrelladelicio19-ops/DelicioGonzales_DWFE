import { useState } from 'react'
import './App.css'
import CatalogoPersona from './components/CatalogoProducto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CatalogoPersona></CatalogoPersona>


    </>
  )
}

export default App

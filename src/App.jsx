import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import HumanCard from './components/HumanCard/HumanCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <HumanCard/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username = "Vikas" buttonTxt="Click Here"/>
      <Card username="Avika" buttonTxt="Visit here"/>
      <Card/>
      
    </>
  )
}

export default App

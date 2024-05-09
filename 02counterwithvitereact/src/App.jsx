import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 0;

  const [counter,setCounter] = useState(0)

 let addValue = ()=>{
  if (counter < 20) {
    setCounter(counter+1)
    console.log("clicked", counter)
  }
  console.log("checked",counter)
    
  }
  
  let removeValue = () =>{
    if (counter > 0) {
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>
        Counter with react
      </h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
      <p>
        footer : {counter}
      </p>
    </>
  )
}

export default App

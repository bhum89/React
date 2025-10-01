import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(12)

//let counter=12
const addvalue=()=>{
  console.log("value added",counter);
  
    if(counter>=100){
         setCounter(counter)
         alert("Value Reached")
    }
    else{
  //counter=counter+1;
  setCounter(counter+1)
    }
  
}
const decreasevalue=()=>{
  if(counter<0){
    setCounter(counter)
    alert("value can not decrease that much ")
  }
  else{
  setCounter(counter-1)
  }
}
  return (
    <>
      <h1>Hello </h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addvalue}>ADD value</button>
      <br/>
      <button onClick={decreasevalue}>decrease value</button>
    </>
  )
}

export default App

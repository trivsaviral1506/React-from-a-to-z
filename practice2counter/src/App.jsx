import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
function increment(){
setCount((count)=>count+1);
}
function decrement(){
  if(count!=0){
    setCount((count)=>count-1);
  }
}
  return (
    <>
      <h1> Count: {count} </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App

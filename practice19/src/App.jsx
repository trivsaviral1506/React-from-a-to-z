import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const [val,setVal] = useState(0)
const previous = useRef(0);

useEffect(()=>{
  previous.current = val;
},[val]);


  return (
    <>
      <h1> Current Value : {val} </h1>
      <h2> Previous value : {previous.current} </h2>
      <button onClick={()=>setVal(val+1)}>Inrement</button>
    </>
  )
}

export default App

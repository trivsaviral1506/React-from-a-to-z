import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
 import './App.css'

function App() {
 
  let [counter , setCounter] = useState(0);
  const addvalue = ()=>{
setCounter(counter+1);//value update ho jaegi har jagah
console.log("clicked",counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick = {addvalue}>ADD</button>
      <p> Counter value is {counter} </p>
    </>
  )
}

export default App

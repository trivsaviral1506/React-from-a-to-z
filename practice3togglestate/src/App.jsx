import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [Mode, changeMode] = useState("Toggle Mode");
  const [heading,changeheading] = useState("Light Mode");
function function1(){
if(Mode=="Toggle Mode"){
  changeMode("Switch to Light Mode");
  changeheading("Dark Mode");
}
else{
  changeMode("Toggle Mode");
  changeheading("Light Mode");
}

}

  return (
    <>
     
      <h1> {heading}</h1>  
      <button onClick={function1}> {Mode} </button>
      
    </>
  )
}

export default App

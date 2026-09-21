import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
     <div className="fixed flex flex-wrap justify-content bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white ">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Olive</button>
      
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>blue</button>
      
        <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}} onClick={() => setColor("white")}>white</button>
      </div>
     </div>
    </div>
    </ >
  )

}

export default App;

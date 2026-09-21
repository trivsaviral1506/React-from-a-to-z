//import { useState } from 'react'
import {Carform} from './Components/CarForm';
import './App.css'

function App() {
  function CarFunction(){
    alert("Car added sucessfully");
  }

  return (
    <>
    <h1>
      Car Rental App
    </h1>
    <Carform name={CarFunction} />

    </>
  )
}

export default App

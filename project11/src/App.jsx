import { useState , useEffect} from 'react'


import './App.css'

function App() {
  const [name , setName] = useState("Aviral")
useEffect(()=>{
document.title = `Hello , ${name}`;
},[name]);
function handleChange(e){
setName(e.target.value);
}
  

  return (
    <>
     <h2> Hello , {name}</h2>
    
     <input type="text" value={name} onChange={handleChange}></input>
    </>
  )
}

export default App

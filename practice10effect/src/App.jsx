import { useState } from 'react'
import { useEffect } from 'react'


import './App.css'
//use effect is there for side effects ,suppose when react re-render any components and that time u want somwe action to get performed then we use use effect
// it has two parameters , one is function which it will perform another one is dependency array which tell when to trigger that function
//use effect is there for synchronizing your component outside react or performing side effects 
function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Aviral")
   useEffect(()=>{
console.log(`Name changed : ${name}`);
   },[name]);
   function handleChange(e){
setName(e.target.value);
   }

  return (
    <>
      <h1> Count: {count}</h1>
      <input type="name" value={name} onChange={handleChange}></input>
      <button onClick={()=>setCount(count+1)}>Incease </button>
          </>
  );
}

export default App

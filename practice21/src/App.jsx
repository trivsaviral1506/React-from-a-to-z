import { useState , useMemo} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [number,setNumber] = useState(10);
const result = useMemo(()=>{
  console.log("Calculating square...");
  return number*number;

},[number]);
  return (
    <>
    <div>
      <h2> Square: {result} </h2>
      <button onClick = {()=>setNumber(number+1)}>Increment number</button>
   <h2> {count} </h2>
      <button onClick = {()=>setCount(count+1)}>Increment count</button>
    </div>
    </>
  )
}

export default App
